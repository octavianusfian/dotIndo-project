import { useAppSelector } from "@/store/hooks";
import { formatPrice } from "@/utils/helper";

const CartTotals = () => {
  const { cartTotal, tax, shipping, orderTotal } = useAppSelector(
    (state) => state.cartState
  );

  return (
    <div className="bg-gray-100 rounded-lg p-6 shadow ">
      <div className="flex justify-between pb-2 text-sm border-b border-gray-300 ">
        <span>Subtotal</span>
        <span className="font-medium">{formatPrice(cartTotal)}</span>
      </div>
      <div className="flex justify-between py-2 text-sm border-b border-gray-300">
        <span>Shipping</span>
        <span className="font-medium">{formatPrice(shipping)}</span>
      </div>
      <div className="flex justify-between py-2 text-sm border-b border-gray-300">
        <span>Tax</span>
        <span className="font-medium">{formatPrice(tax)}</span>
      </div>
      <div className="flex justify-between pt-4 text-md">
        <span>Order Total</span>
        <span className="font-semibold">{formatPrice(orderTotal)}</span>
      </div>
    </div>
  );
};

export default CartTotals;
