import { CartProduct } from "@/types";
import CartItem from "./CartItem";
import { useAppSelector } from "@/store/hooks";

const CartItemList = () => {
  const cartItems = useAppSelector((state) => state.cartState.cartItems);
  return (
    <>
      {cartItems.map((item: CartProduct) => (
        <CartItem key={item.id} cartItem={item} />
      ))}
    </>
  );
};

export default CartItemList;
