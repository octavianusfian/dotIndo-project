import { useAppSelector } from "@/store/hooks";
import CartTotals from "@/components/Cart/CartTotals";
import CartItemList from "@/components/Cart/CartItemList";
import SectionTitle from "@/components/SectionTitle";

const Cart = () => {
  const numItemsInCart = useAppSelector(
    (state) => state.cartState.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text={"Your cart is empty."} />;
  }
  return (
    <>
      <SectionTitle text={"Shopping Cart"} />
      <div className="mt-12 grid lg:grid-cols-12 gap-8 w-full ">
        <div className="lg:col-span-8">
          <CartItemList />
        </div>
        <div className="lg:col-span-4 lg:pl-4">
          <CartTotals />
        </div>
      </div>
    </>
  );
};

export default Cart;
