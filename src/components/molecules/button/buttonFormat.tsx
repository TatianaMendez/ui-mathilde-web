import React from 'react';
import styles from './button.module.css';
import type { IconType } from 'react-icons';

export interface ButtonFormatProps {
  txtBtn: string;
  typeButton: string;
  full: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  type: string;
  onClick?: () => void;
  leftIcon?: IconType; 
  rightIcon?: IconType; 
  iconSize?: number; 
}

export const ButtonFormat: React.FC<ButtonFormatProps> = ({
  txtBtn,
  typeButton,
  full,
  onClick,
  disabled,
  type,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  iconSize = 20,
}) => {
  return (
    <div className={`${full ? styles['mth-btn-full'] : ''}`}>
      <button
        type={type as 'submit' | 'reset' | 'button'}
        className={`${styles['mth-btn']} ${styles[`mth-btn-${typeButton}`]} ${
          full ? styles['mth-btn-full'] : ''
        } flex items-center justify-center gap-2`}
        onClick={onClick}
        disabled={disabled}
      >
        {LeftIcon && <LeftIcon size={iconSize} />}
        {txtBtn}
        {RightIcon && <RightIcon size={iconSize} />}
      </button>
    </div>
  );
};

export default ButtonFormat;
