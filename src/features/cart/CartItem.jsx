import { TrashIcon } from '@heroicons/react/20/solid';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { useSelector } from 'react-redux';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice, imageUrl } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));

  return (
    <li className="flex  py-3 sm:flex-row">
      <img
        src={imageUrl}
        alt={name}
        className="h-24 w-24 rounded-lg object-cover"
      />

      <div className="flex grow flex-col justify-between px-4 py-2">
        <div className="flex items-center justify-between">
          <p className="text-lg font-bold">{name}</p>
          <DeleteItem pizzaId={pizzaId} />
        </div>

        <div>
          <p className="text-lg">Quantity: {quantity}</p>
        </div>

        <div className="flex items-center justify-between">
          <p className="mt-2 text-base font-bold">
            {formatCurrency(totalPrice)}
          </p>
          <UpdateItemQuantity
            pizzaId={pizzaId}
            currentQuantity={currentQuantity}
          />
        </div>
      </div>
    </li>
  );
}

export default CartItem;
