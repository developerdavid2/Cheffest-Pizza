import Logo from './Logo';
import SearchOrder from '../features/order/SearchOrder';
import Username from '../features/user/UserName';

function Header() {
  return (
    <header className="flex items-center justify-between border-b border-stone-300 px-4 py-2">
      <Logo />
      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
