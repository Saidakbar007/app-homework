import React from "react";

const AppLabel = ({
  labelText,
  errorText,
  id,
  isRequired,
  inputPlaceholder,
  inputType,
  labelChange,
  labelValue,
  hasError
}) => {
  return (
    <div className={`form-group ${hasError ? "error" : ""}`}>
      <label htmlFor={id}>
        {labelText} {isRequired && "*"}
      </label>
      <input
        type={inputType}
        id={id}
        placeholder={inputPlaceholder}
        value={labelValue}
        onChange={(e) => labelChange(e.target.value)}
        required={isRequired}
      />
      {hasError && <span className="error-text">{errorText}</span>}
    </div>
  );
};

export default AppLabel;
