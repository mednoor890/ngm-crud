import React from 'react';
import { Btn } from './styles/Button'

interface ButtonProps {
  onClick: (e: React.FormEvent<HTMLFormElement>) => void;
  type?: string;
  mode: "Add" | "Update" | "Delete";
  
}

const Button: React.FC<ButtonProps> = ({ mode, onClick }) => {
    return (
      <Btn mode={mode} onClick={onClick}>{mode}</Btn>
    );
  };

export default Button;