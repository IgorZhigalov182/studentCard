import React from 'react';

const LinkField = ({ label, value, defaultValue, name, onChange }) => {
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
          value={value}
          type="url"
          className="form-control"
          id={name}
          defaultValue={defaultValue}
          name={name}
        />
      </div>
    </form>
  );
};

export default LinkField;
