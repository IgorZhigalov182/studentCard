import React from 'react';

const TextField = ({ label, value, onChange, name }) => {
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
          />
        </div>
      </form>
    </>
  );
};

export default TextField;
