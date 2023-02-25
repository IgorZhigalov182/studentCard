import React, { useCallback, useEffect, useState } from 'react';
import TextField from '../component/TextField';
import NumberField from '../component/NumberField';
import LinkField from '../component/LinkField';
import { useHistory } from 'react-router';
import { validator } from '../utils/validator';

const SecondPage = () => {
  const history = useHistory();
  const dataLocalStorage = JSON.parse(localStorage.getItem('user'));
  const [data, setData] = useState(dataLocalStorage);
  const [errors, setErrors] = useState({});

  const validatorConfig = {
    name: {
      isRequired: {
        message: 'Имя обязательно для заполнения',
      },
    },
    secondName: {
      isRequired: {
        message: 'Фамилия обязательна для заполнения',
      },
    },
    birthyear: {
      isRequired: {
        message: 'Год рождения обязателен для заполнения',
      },
    },
    portfolio: {
      isRequired: {
        message: 'Портфолио обязательно для заполнения',
      },
    },
  };

  // const validate = validator(data, validatorConfig);

  // console.log(validate);
  useEffect(() => {
    validate();
  }, [data]);

  const validate = () => {
    const errors = validator(data, validatorConfig);
    console.log(errors);
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const isValid = Object.keys(errors).length === 0;

  // const countErrors =

  const handleChange = useCallback((target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  });

  const handleBack = () => {
    history.goBack();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Обновлено!');
    localStorage.setItem('user', JSON.stringify(data));
    history.goBack();
  };

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div
      style={{
        maxWidth: '30%',
        marginLeft: '200px',
      }}>
      {localStorage.getItem('user') ? <h1>Редактировать</h1> : <h1>Создать</h1>}

      <TextField label="Имя" name="name" value={data.name} onChange={handleChange} />
      <TextField
        label="Фамилия"
        name="secondName"
        value={data.secondName}
        onChange={handleChange}
        // defaultValue={data.name}
      />
      <NumberField
        label="Год рождения"
        name="birthyear"
        value={data.birthyear}
        onChange={handleChange}
      />
      <LinkField
        label="Портфолио"
        name="portfolio"
        defaultValue={data.portfolio}
        onChange={handleChange}
      />

      {localStorage.getItem('user') ? (
        <div>
          <button className="btn btn-secondary" onClick={handleBack}>
            Назад
          </button>
          {/* {isValid ? : ''} */}
          <button className="btn btn-primary m-3" onClick={handleSubmit}>
            Редактировать
          </button>
        </div>
      ) : (
        <button className="btn btn-primary" onClick={handleClick}>
          Создать
        </button>
      )}
    </div>
  );
};

export default SecondPage;
