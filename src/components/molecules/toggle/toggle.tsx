import { useState } from 'react';

interface ToggleProps {
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export function Toggle({
  label,
  checked = false,
  disabled = false,
  onChange,
}: ToggleProps) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled) return;

    const newChecked = e.target.checked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <div className="flex items-center gap-2">
      <label
        className={`inline-flex items-center ${disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'}`}
      >
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
        />
        <div
          className="peer relative h-6 w-11 rounded-full bg-gray-200 
          after:absolute after:start-[2px] 
          after:top-0.5 after:h-5 
          after:w-5 after:rounded-full 
          after:border after:border-gray-300 
          after:bg-white after:transition-all after:content-[''] 
          peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white 
          peer-focus:ring-4 peer-focus:ring-blue-300 dark:border-gray-600 
          dark:bg-gray-700 dark:peer-checked:bg-blue-600 
          dark:peer-focus:ring-blue-800 rtl:peer-checked:after:-translate-x-full"
        ></div>
      </label>
      {label && (
        <span
          className={`text-sm ${disabled ? 'text-gray-500' : 'text-gray-700'}`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

export default Toggle;
