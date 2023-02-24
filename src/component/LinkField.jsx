import React from 'react';

const LinkField = ({ label, value, defaultValue, name, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="birthyear" className="form-label">
          {label}
        </label>
        <input
          onChange={handleChange}
          type="url"
          className="form-control"
          id="birthyear"
          defaultValue={defaultValue}
        />
      </div>
    </form>
  );
};

export default LinkField;
