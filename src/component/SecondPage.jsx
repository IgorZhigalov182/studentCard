import React from 'react';

const SecondPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center', maxWidth: '30%' }}>
      <h1>Создать</h1>
      <label htmlFor="firstName">Имя</label>
      <input type="text" name="firstName" />
      <label htmlFor="secondName">Фамилия</label>
      <input type="text" name="secondName" />
      <label htmlFor="birthday">Год Рождения</label>
      <input type="number" name="birthday" />
      <label htmlFor="">Портфолио</label>
      <input type="link" name="portfolio" />
      {<br />}
      <button>Создать</button>
    </div>
  );
};

export default SecondPage;
