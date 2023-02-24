import React from 'react';

const TextField = ({ label, value, onChange }) => {
  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value });
  };
  return (
    <>
      <form>
        <div className="mb-3">
          <label htmlFor="secondName" className="form-label">
            {label}
          </label>
          <input onChange={handleChange} type="name" className="form-control" id="secondName" />
        </div>
      </form>
    </>
  );
};

export default TextField;
