import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import CartItem from './CartItem';
import { getUserName } from '../user/userSlice';
import { clearCart, getCart } from './cartSlice';
import EmptyCart from './EmptyCart';

function Cart() {
  const dispatch = useDispatch();
  const username = useSelector(getUserName);
  const cart = useSelector(getCart);

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="mx-auto px-4 py-3 sm:max-w-2xl">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="px-4 py-3 text-3xl font-bold">Your cart, {username}</h2>

      <ul className="mt-3 divide-y divide-stone-200 rounded-xl border bg-stone-50 p-4">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-5 flex flex-col gap-3">
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
        <Button className="mt-6" to="/order/new" type="primary">
          Order pizzas
        </Button>
      </div>
    </div>
  );
}

export default Cart;
