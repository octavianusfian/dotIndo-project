import { Product } from "@/types";
import { formatPrice } from "@/utils/helper";
import { JSX, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addItem } from "@/store/slices/cartSlice";
import ButtonCustom from "@/components/ui-custom/ButtonCustom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ErrorPage from "../ErrorPage";

const SingleProduct = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [amount, setAmount] = useState(1);
  const [error, setError] = useState(false);
  const user = useAppSelector((state) => state.authState.user);

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAmount(+e.target.value);
  };

  const cartProduct = {
    id: id,
    name: product?.name,
    price: product?.price,
    amount,
  };

  const handleAddToCart = () => {
    dispatch(addItem({ product: cartProduct }));
    navigate("/cart");
  };

  function generateAmountOptions(count: number): JSX.Element[] {
    return Array.from({ length: count }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1}
      </option>
    ));
  }

  useEffect(() => {
    if (!id) {
      setError(true);
      return;
    }

    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      const productData: Product[] = JSON.parse(storedProducts);
      const foundProduct = productData.find((product) => product.id === +id);

      if (!foundProduct) {
        setError(true); // kalau id tidak ketemu
      } else {
        setProduct(foundProduct);
      }
    } else {
      setError(true); // kalau tidak ada data sama sekali
    }
  }, [id]);

  if (error) {
    return <ErrorPage message="Cannot Find Product..." />;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="items-center">
          <ButtonCustom
            variant="secondary"
            to="/catalog-products"
            className="mb-8"
          >
            Back to All Products
          </ButtonCustom>
          {/* Product Details */}
          <Card className="w-[320px] md:w-[500px]">
            <CardHeader>
              <CardTitle className="text-2xl">{product.name}</CardTitle>
              <CardDescription>{product.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-2xl text-primary mt-4">
                {formatPrice(product.price)}
              </p>
              <div className="flex items-center justify-center gap-4 w-full mt-6">
                <label htmlFor="amount" className="font-semibold capitalize">
                  Amount
                </label>
                <select
                  id="amount"
                  value={amount}
                  onChange={handleAmount}
                  className="border rounded-md p-2 w-24 focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  {generateAmountOptions(20)}
                </select>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <div className="mt-8">
                {user ? (
                  <ButtonCustom
                    variant="primary"
                    className="uppercase w-full md:w-auto"
                    onClick={handleAddToCart}
                  >
                    Add to Bag
                  </ButtonCustom>
                ) : (
                  <ButtonCustom to="/login">Login to add cart</ButtonCustom>
                )}
              </div>
            </CardFooter>
          </Card>

          {/* Product Image Placeholder (optional future) */}
          {/* <div className="w-full h-64 bg-gray-100 rounded-lg"></div> */}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
