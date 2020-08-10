import React, { InputHTMLAttributes } from "react";

import "./styles.css";

interface InputLoginProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
}

const InputLogin: React.FC<InputLoginProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block-login">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest} />
    </div>
  );
};

export default InputLogin;
