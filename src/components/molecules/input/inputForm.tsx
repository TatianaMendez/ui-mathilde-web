import { forwardRef } from 'react';
import type { InputFormProps } from './inputForm.types';

export const InputForm = forwardRef<HTMLInputElement, InputFormProps>(({
  placeholder,
  label,
  error,
  type,
  classInclude,
  maxLength,
  onChange,
  ...rest
}, ref) => {
  return (
    <div className="mb-5">
      {/* Si quieres mostrar una etiqueta */}
      {label && <label className=" mb-1 block font-semibold">{label}</label>}
      
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        className={`w-full p-2 border ${classInclude || ''}`}
        maxLength={maxLength}
        onChange={onChange}
        {...rest}
      />

      {/* Mostrar un mensaje de error si existe */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

InputForm.displayName = 'InputForm';

