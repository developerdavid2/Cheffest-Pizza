import { useNavigate, useRouteError } from 'react-router-dom';
import Button from './Button';

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center">
      <img
        src="/error-404.png"
        alt="Error 404 Image"
        className="mb-3 w-[70%] sm:w-[40%]"
      />
      <h1 className="px-4 py-3 text-3xl font-bold">
        &quot;Something went wrong &quot;
      </h1>
      <p>{error.data || error.message}</p>
      <Button type="primary" onClick={() => navigate(-1)}>
        &larr; Go back
      </Button>
    </div>
  );
}

export default Error;
