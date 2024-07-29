import { useLoaderData } from 'react-router-dom';
import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  const menu = useLoaderData();
  
  return (
    <section>
      <div className="border-2">
        <div className="relative flex h-48 max-w-full items-center justify-center bg-[url('/menu-bg-2.jpg')] bg-cover bg-center">
          <div className="absolute inset-0 backdrop-blur-sm"></div>
          <h1 className="relative z-10 p-2 text-3xl font-semibold text-stone-100 sm:text-5xl">
            Our Special Menu
          </h1>
        </div>
      </div>

      <div className="mx-auto max-w-3xl">
        <ul className="divide-y divide-stone-400 p-4 pb-[5rem]"> {/* Added padding-bottom */}
          {menu.map((pizza) => (
            <MenuItem pizza={pizza} key={pizza.id} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
