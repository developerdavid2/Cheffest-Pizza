import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getTotalPrice, getTotalQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';
import { ShoppingCartIcon } from '@heroicons/react/20/solid';

function CartOverview() {
  const totalCartQuantity = useSelector(getTotalQuantity);
  const totalCartPrice = useSelector(getTotalPrice);

  if (!totalCartQuantity) return null;
  return (
    <div className="flex items-center justify-between bg-zinc-700 p-4 text-xs uppercase text-stone-200 sm:text-xl">
      <p className="space-x-3">
        <span>{totalCartQuantity} pizzas</span>
        <span className="font-semibold">{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart" className="flex items-center justify-center gap-2">
        Open cart
        <ShoppingCartIcon className="h-6 w-6 cursor-pointer" />
      </Link>
    </div>
  );
}

export default CartOverview;
