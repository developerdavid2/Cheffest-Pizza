import { useSelector } from 'react-redux';
import LinkButton from '../../ui/LinkButton';
import { getUserName } from '../user/userSlice';

function EmptyCart() {
  const username = useSelector(getUserName);

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="px-4 py-3 text-3xl font-bold">Your cart, {username}</h2>

      <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
        <img
          src="/empty.png"
          alt="Empty Cart Image"
          className="mb-3 w-[70%] sm:w-[40%]"
        />
        <h3 className="text-2xl font-bold">&quot;Uh-oh!&quot;</h3>
        <p>Your cart is still empty. Start adding some pizzas 🍕</p>
      </div>
    </div>
  );
}

export default EmptyCart;
