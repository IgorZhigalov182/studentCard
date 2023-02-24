import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const FirstPage = () => {
  const [data, setData] = useState({});
  const history = useHistory();

  useEffect(() => {
    setData(localStorage.getItem('user'));
  }, []);

  const handleClick = () => {
    history.push('/signup');
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <h1>Карточка студента</h1>
      <h4>нет данных</h4>

      <div>
        {localStorage.length === 0 ? (
          <>
            <button className="btn btn-primary" onClick={handleClick}>
              Добавить
            </button>
          </>
        ) : (
          <h1>{Object.keys(localStorage)}</h1>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
