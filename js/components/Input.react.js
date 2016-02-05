import React from 'react';

const Input = ({ classes, id, label, defaultValue, placeholder, ...other }) => (
  <div className="form-group">
    <label htmlFor={ id }>{ label }</label>
    <input
      type="text"
      data-settings-value={ id }
      className={ `form-control settings-input ${ classes }`}
      id={ id }
      defaultValue={ defaultValue }
      placeholder={ placeholder }
      { ...other }
    />
  </div>
);

export default Input;
