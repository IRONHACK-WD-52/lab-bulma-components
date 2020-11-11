import React from "react";
import "bulma/css/bulma.css";

function FormField(props) {
  return (
    <div className="field">
      <label className="label">{props.label}</label>
      <div className="control">
        <input
          name={props.name}
          className="input"
          type={props.type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </div>
  );
}

export default FormField;
