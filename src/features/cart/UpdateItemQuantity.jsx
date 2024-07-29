import { useDispatch, useSelector } from 'react-redux';
import {
  decreaseItemQuantity,
  getCurrentQuantityById,
  increaseItemQuantity,
} from './cartSlice';

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-start overflow-hidden rounded-md border border-zinc-700 bg-zinc-700">
      <button
        className="flex w-full items-center justify-center px-[8px] text-base text-stone-200"
        onClick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </button>

      <p className="w-full min-w-[27px] bg-zinc-100 text-center font-semibold text-black">
        {currentQuantity}
      </p>

      <button
        className="flex w-full items-center justify-center px-[6px] text-base text-stone-200"
        onClick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </button>
    </div>
  );
}

export default UpdateItemQuantity;
