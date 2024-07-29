import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-28 rounded-full border border-stone-400 bg-stone-100 px-4 py-2 text-sm transition-all duration-200 placeholder:text-stone-400 focus:w-72 focus:border-0 focus:outline-0 focus:ring focus:ring-orange-300 sm:w-64"
      />
    </form>
  );
}

export default SearchOrder;
