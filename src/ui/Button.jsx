import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, onClick }) {
  const base =
    'text-stone-8 00 inline-block rounded-lg bg-amber-900 text-stone-100 font-semibold uppercase tracking-wide transition-colors duration-300 hover:bg-orange-300 hover:text-black focus:bg-orange-300 focus:text-black focus:outline-none focus:ring focus:ring-orange-300 focus:ring-offset-2 disabled:cursor-not-allowed flex justify-center';

  const styles = {
    primary: base + ' px-4 py-2 md:px-6 md:py-3 rounded-xl',
    small:
      base +
      ' sm:px-4 sm:py-2 sm:rounded-lg px-[6px] py-[8px] md:px-5 md:py-2.5 text-[12px] sm:text-xs',
    secondary:
      'inline-block text-sm rounded-lg border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button className={styles[type]} disabled={disabled} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button className={styles[type]} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
