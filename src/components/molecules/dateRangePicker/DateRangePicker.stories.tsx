import type { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker } from './dateRangePicker';
import { action } from '@storybook/addon-actions';
import { useArgs } from '@storybook/preview-api';

const meta: Meta<typeof DateRangePicker> = {
  title: 'Molecules/DateRangePicker',
  component: DateRangePicker,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    onChange: {
      action: 'date-range-changed',
      description: 'Callback que se ejecuta cuando cambia el rango de fechas',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    onChange: (start: Date, end: Date) => {
      console.log(`Seleccionaste: ${start.toLocaleDateString()} - ${end.toLocaleDateString()}`);
      action('date-range-changed')('Inicio: '+ start, 'Fin: '+end);
    },
  },
  parameters: {
    docs: {
      description: {
        story: 'Selector de rango de fechas con menú de rangos rápidos y responsive.',
      },
    },
  },
};

export const ControlInteractivo: Story = {
  args: {
    value: {
      startDate: new Date(2024, 3, 1),
      endDate: new Date(2024, 3, 15),
    },
  },
  render: (args) => {
    const [{ value }, updateArgs] = useArgs();
    return (
      <DateRangePicker
        {...args}
        value={value}
        onChange={(start, end) => {
          updateArgs({ value: { startDate: start, endDate: end } });
        }}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Permite controlar y actualizar el rango desde los Controls y desde el componente.',
      },
    },
  },
};