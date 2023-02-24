import React from 'react';

const NumberField = ({ label, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="birthyear" className="form-label">
          {label}
        </label>
        <input onChange={handleChange} type="number" className="form-control" id="birthyear" />
      </div>
    </form>
  );
};

export default NumberField;
