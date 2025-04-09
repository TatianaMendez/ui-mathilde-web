import { forwardRef } from 'react';
import type { SelectFormProps } from './selectForm.types';

export const SelectForm = forwardRef<HTMLSelectElement, SelectFormProps>(
  ({ options, label, error, value, onChange, ...rest }, ref) => {
    return (
      <div className="mb-5">
        {label && <label className="mb-1 block font-semibold">{label}</label>}

        <select
          ref={ref}
          className="w-full rounded border p-2"
          value={value}
          onChange={onChange}
          {...rest}
        >
          <option disabled value="">
            Seleccione una opción
          </option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

SelectForm.displayName = 'SelectForm';
