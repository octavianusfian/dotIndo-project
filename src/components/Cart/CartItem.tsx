import { JSX } from "react";
import { formatPrice } from "../../utils/helper";
import { removeItem, editItem } from "../../store/slices/cartSlice";
import { CartProduct } from "@/types";
import { useAppDispatch } from "@/store/hooks";
import ButtonCustom from "../ui-custom/ButtonCustom";
import { FaTrashAlt } from "react-icons/fa";

function generateAmountOptions(count: number): JSX.Element[] {
  return Array.from({ length: count }, (_, i) => (
    <option key={i + 1} value={i + 1}>
      {i + 1}
    </option>
  ));
}

const CartItem = ({ cartItem }: { cartItem: CartProduct }) => {
  const dispatch = useAppDispatch();
  const { id, name, price, amount } = cartItem;

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ id }));
  };

  const handleAmount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(editItem({ id, amount: +e.target.value }));
  };

  return (
    <article
      key={id}
      className="mb-12 flex items-center flex-col gap-y-4 sm:flex-row sm:justify-around flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* INFO */}
      <div className="sm:ml-16 sm:w-64 flex items-center justify-center">
        {/* TITLE */}
        <h3 className="capitalize font-medium">{name}</h3>
      </div>
      <div className="sm:ml-6">
        {/* AMOUNT */}
        <div className="max-w-xs flex mt-6 gap-x-6">
          <div className="flex flex-col gap-y-4 w-full ">
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
          <div className="flex items-center">
            <ButtonCustom
              icon={<FaTrashAlt />}
              variant="danger"
              onClick={removeItemFromTheCart}
            />
          </div>
        </div>
      </div>

      {/* PRICE */}
      <div className="font-medium  flex items-center">
        {formatPrice(price)}
      </div>
    </article>
  );
};

export default CartItem;
