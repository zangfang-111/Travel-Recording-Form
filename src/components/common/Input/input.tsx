import * as React from "react";

interface InputProps {
  type?: string;
  onChange: (name: string, e: any) => void;
  value: number | string;
  name: string;
  label?: string;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  value,
  name,
  label,
  onChange,
  placeholder,
}) => (
  <div className='tr-input'>
    <label>{label}</label>
    <input
      placeholder={placeholder}
      type={type || 'number'}
      onChange={e => onChange(name, e)}
      value={value}
      name={name}
    />
  </div>
)

export default Input
