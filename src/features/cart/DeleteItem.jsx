import { TrashIcon } from '@heroicons/react/20/solid';
import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <TrashIcon
      className="h-6 w-10 cursor-pointer text-gray-400 hover:text-gray-600"
      onClick={() => dispatch(deleteItem(pizzaId))}
    />
  );
}

export default DeleteItem;
