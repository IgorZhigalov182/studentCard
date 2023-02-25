import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const FirstPage = () => {
  const [data, setData] = useState({});
  const history = useHistory();

  console.log(data);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem('user')));
  }, []);

  const handleClick = () => {
    history.push('/signup');
  };

  return (
    <div style={{ marginLeft: '200px' }}>
      <h1>Карточка студента</h1>
      <div>
        {localStorage.length === 0 ? (
          <>
            <button className="btn btn-primary" onClick={handleClick}>
              Добавить
            </button>
          </>
        ) : (
          <>
            {/* <h1>{Object.keys(localStorage)}</h1> */}
            <p>Имя: {data.name}</p>
            <p>Фамилия: {data.secondName}</p>
            <p>Год рождения: {data.birthyear}</p>
            <p>Портфолио: {data.portfolio}</p>
            <button className="btn btn-primary" onClick={handleClick}>
              Редактировать
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default FirstPage;
