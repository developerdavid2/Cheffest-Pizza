import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  const username = useSelector((state) => state.user.username);

  return (
    <section className="mx-auto grid grid-rows-2 items-center justify-between gap-4 sm:min-h-[428px] sm:max-w-xl sm:grid-cols-2 sm:grid-rows-1 md:max-w-[46rem] lg:max-w-4xl">
      <div className="accounted-height mt-10 flex flex-col items-center px-4 text-center sm:items-start sm:text-start">
        <h1 className="mb-5 text-3xl font-semibold text-stone-700 sm:text-4xl lg:text-[3.25rem] lg:leading-[3.5rem]">
          The best <span className="text-amber-700">pizza.</span>
          <br />
          Straight out of the oven, straight to you.
        </h1>

        {username === '' ? (
          <CreateUser />
        ) : (
          <Button to="/menu" type="primary">
            Continue Ordering, {username}
          </Button>
        )}
      </div>

      <div className="flex h-full items-center justify-center px-4 sm:justify-end">
        <img
          src="/hero-pizza.png"
          alt="Pizza Hero"
          className="w-52 sm:w-56 md:w-60 lg:w-80"
        />
      </div>
    </section>
  );
}

export default Home;
