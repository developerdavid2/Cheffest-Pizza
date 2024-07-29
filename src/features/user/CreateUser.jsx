import { useState } from 'react';
import Button from '../../ui/Button';
import { useDispatch } from 'react-redux';
import { updateName } from './userSlice';
import { useNavigate } from 'react-router-dom';

function CreateUser() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!username) return null;
    dispatch(updateName(username));
    navigate('/menu');
  }

  return (
    <form onSubmit={handleSubmit}>
      <p className="text-xl font-medium text-gray-500 sm:text-lg">
        👋 Welcome! Please start by telling us your name:
      </p>

      <div className="flex flex-col items-center justify-center sm:items-start">
        <input
          className="input mb-4 mt-2 w-72"
          type="text"
          placeholder="Your full name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        {username !== '' && <Button type="primary">Start ordering</Button>}
      </div>
    </form>
  );
}

export default CreateUser;
