import React from 'react';
import { Link } from 'react-router-dom';

const FirstPage = () => {
  return (
    <>
      <h1>Карточка студента</h1>
      <h3>нет данных</h3>

      <div>
        {localStorage.length === 0 ? (
          <>
            <Link to="/signup">
              <button>Добавить </button>
            </Link>
          </>
        ) : (
          <h1>{Object.keys(localStorage)}</h1>
        )}
      </div>
    </>
  );
};

export default FirstPage;
