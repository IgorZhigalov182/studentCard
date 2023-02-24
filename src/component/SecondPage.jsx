import React, { useState } from 'react';
import TextField from './TextField';
import NumberField from './NumberField';
import LinkField from './LinkField';
import { useHistory } from 'react-router';

const SecondPage = () => {
  const history = useHistory();

  const [data, setData] = useState({
    name: '',
    secondName: '',
    birthyear: '',
    portfolio: '',
  });

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  console.log(data);

  const handleClick = () => {
    alert('Обновлено!');
    history.goBack();
  };

  return (
    <div
      style={{
        maxWidth: '30%',
        marginLeft: '200px',
      }}>
      <h1>Создать</h1>

      <TextField label="Имя" name="name" value={data.name} onChange={handleChange} />
      <TextField label="Фамилия" value={data.secondName} onChange={handleChange} />
      <NumberField label="Год рождения" value={data.birthyear} onChange={handleChange} />
      <LinkField label="Портфолио" defaultValue={data.portfolio} onChange={handleChange} />

      <button className="btn btn-primary" onClick={handleClick}>
        Создать
      </button>
    </div>
  );
};

export default SecondPage;
