import React from 'react';

const NumberField = ({ label, value, onChange, name }) => {
  const handleChange = ({ target }) => {
    // console.log(target);
    onChange({ name: target.name, value: target.value });
  };
  return (
    <form>
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          onChange={handleChange}
          type="number"
          className="form-control"
          id={name}
          value={value}
          name={name}
        />
      </div>
    </form>
  );
};

export default NumberField;
