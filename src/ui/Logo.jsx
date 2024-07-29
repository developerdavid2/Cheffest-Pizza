import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div>
      <Link to="/">
        <img
          src="/Cheffville Logo.png"
          alt="FOOD REACT PIZZA"
          className="w-24 contrast-50 -hue-rotate-30 sm:w-36"
        ></img>
      </Link>
    </div>
  );
}

export default Logo;
