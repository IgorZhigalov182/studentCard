import React from 'react';

const TextField = ({ label, value, onChange, name, defaultValue }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor={name} className="form-label">
            {label}
          </label>
          <input
            onChange={handleChange}
            type="text"
            className="form-control"
            id={name}
            value={value}
            name={name}
            defaultValue={defaultValue}
          />
        </div>
      </form>
    </>
  );
};

export default TextField;
