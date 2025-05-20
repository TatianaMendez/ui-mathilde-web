import type { Meta, StoryObj } from '@storybook/react';
import Toggle from './toggle';

const meta = {
  title: 'Molecules/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto que se muestra junto al toggle',
    },
    checked: {
      control: 'boolean',
      description: 'Estado inicial del toggle',
    },
    disabled: {
      control: 'boolean',
      description: 'Si el toggle está deshabilitado',
    },
    onChange: {
      action: 'changed',
      description: 'Función llamada cuando cambia el estado del toggle',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Toggle predeterminado',
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: 'Toggle activado',
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Toggle deshabilitado',
    disabled: true,
  },
};

export const DisabledAndChecked: Story = {
  args: {
    label: 'Toggle deshabilitado y activado',
    disabled: true,
    checked: true,
  },
};
