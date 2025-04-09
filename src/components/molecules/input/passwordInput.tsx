import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import style from './passwordInput.module.css';

interface PasswordInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  placeholder,
  onChange,
  value,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mb-5">
      <div className="relative inline-block w-full">
        <input
          type={showPassword ? 'text' : 'password'}
          value={value}
          className="w-full border p-2 pr-10"
          onChange={onChange}
          placeholder={placeholder}
          {...props}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className={style['mth-password']}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
    </div>
  );
};
