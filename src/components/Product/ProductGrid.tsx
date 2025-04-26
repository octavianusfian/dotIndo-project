import { Link } from "react-router-dom";
import { formatPrice } from "@/utils/helper";
import { Product } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="w-full grid pt-12 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, price, name } = product;
        return (
          <Link to={`/catalog-products/${product.id}`} key={id}>
            <Card className="w-full min-h-[200px] flex flex-col justify-between shadow hover:shadow-md transition rounded-lg">
              <CardHeader>
                <CardTitle className="text-lg">{name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{formatPrice(price)}</p>
              </CardContent>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
