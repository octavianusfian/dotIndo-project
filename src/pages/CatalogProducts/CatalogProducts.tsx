import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import FormInput from "@/components/Form/FormInput";
import ProductsGrid from "@/components/Product/ProductGrid";
import { Product } from "@/types";
// import { Toast } from "../components/ui/toast";
import productsData from "@/data/products.json";
import FormContainer from "@/components/Form/FormContainer";
import { toast } from "react-hot-toast";
import { useAppSelector } from "@/store/hooks";
import ButtonCustom from "@/components/ui-custom/ButtonCustom";

const CatalogProducts = () => {
  const user = useAppSelector((state) => state.authState.user);

  const [products, setProducts] = useState<Product[]>(productsData);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  const addProduct = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const price = parseFloat(formData.get("price") as string);
    const description = formData.get("description") as string;

    const nextId =
      products.length > 0 ? Math.max(...products.map((p) => p.id)) + 1 : 1;

    const productToAdd: Product = {
      id: nextId,
      name: name,
      price: price,
      description: description,
    };

    setProducts((prev) => [...prev, productToAdd]);
    toast.success("Successfully add new product");
    setOpenDialog(false);
  };

  return (
    <>
      <section className="w-full lg:w-4xl">
        <div className="p-6">
          {user && (
            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
              <DialogTrigger asChild>
                <ButtonCustom variant="secondary" className="mt-4" >
                  Add Product
                </ButtonCustom>
              </DialogTrigger>

              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Add Product</DialogTitle>
                </DialogHeader>
                <FormContainer
                  onSubmit={(e) =>
                    addProduct(e as React.FormEvent<HTMLFormElement>)
                  }
                  className="grid gap-4 py-4"
                >
                  <div>
                    <FormInput
                      label="Product Name"
                      id="name"
                      name="name"
                      type="text"
                      required
                    />

                    <FormInput
                      label="Price"
                      id="price"
                      name="price"
                      type="number"
                      required
                    />
                    <FormInput
                      label="Description"
                      id="description"
                      name="description"
                      type="textarea"
                      required
                    />
                  </div>
                  <DialogFooter>
                    <Button type="submit" className="mt-4">
                      Add Product
                    </Button>
                  </DialogFooter>
                </FormContainer>
              </DialogContent>
            </Dialog>
          )}

          <ProductsGrid products={products} />
        </div>
      </section>
    </>
  );
};

export default CatalogProducts;
