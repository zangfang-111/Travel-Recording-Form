import * as React from "react";

interface ButtonProps {
  action: () => void;
  name: string;
}

const Button: React.FC<ButtonProps> = ({ name, action }) => (
  <button className="tr-button" onClick={action}>
    {name}
  </button>
)

export default Button
