import React, { TextareaHTMLAttributes } from "react";

import "./styles.css";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  name: string;
  warn: string;
}

const Textarea: React.FC<TextareaProps> = ({ label, warn, name, ...rest }) => {
  return (
    <div className="textarea-block">
      <label htmlFor={name}>
        {label}
        <span>{warn}</span>
      </label>
      <textarea id={name} {...rest} />
    </div>
  );
};

export default Textarea;
