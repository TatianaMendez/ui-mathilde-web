import type { Meta, StoryObj } from '@storybook/react';
import { ButtonFormat } from './buttonFormat';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';
import { FaGoogle } from 'react-icons/fa';

export const meta = {
  title: 'Molecules/ButtonFormat',
  component: ButtonFormat,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    typeButton: {
      control: 'select',
      options: ['default', 'border'],
      description: 'Estilo del botón',
      defaultValue: 'default',
    },
    full: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    type: {
      control: 'select',
      options: ['button', 'submit', 'reset'],
    },
    iconSize: {
      control: 'number',
    },
  },
} satisfies Meta<typeof ButtonFormat>;

export default meta;
type Story = StoryObj<typeof meta>;

// Botón básico
export const Default: Story = {
  args: {
    txtBtn: 'Click me',
    typeButton: 'default',
    full: false,
    type: 'button',
  },
};

// Botón con borde
export const Border: Story = {
  args: {
    ...Default.args,
    typeButton: 'border',
  },
};

// Botón con icono a la izquierda
export const WithLeftIcon: Story = {
  args: {
    ...Default.args,
    txtBtn: 'Previous',
    leftIcon: HiArrowLeft,
  },
};

// Botón con icono a la derecha
export const WithRightIcon: Story = {
  args: {
    ...Default.args,
    txtBtn: 'Next',
    rightIcon: HiArrowRight,
  },
};

// Botón con ambos iconos
export const WithBothIcons: Story = {
  args: {
    ...Default.args,
    txtBtn: 'Navigate',
    leftIcon: HiArrowLeft,
    rightIcon: HiArrowRight,
  },
};

// Botón de Google como ejemplo
export const GoogleButton: Story = {
  args: {
    ...Default.args,
    txtBtn: 'Sign in with Google',
    typeButton: 'border',
    leftIcon: FaGoogle,
    type: 'button',
  },
};

// Botón con icono personalizado
export const CustomIconSize: Story = {
  args: {
    ...Default.args,
    txtBtn: 'Large Icons',
    leftIcon: FaGoogle,
    rightIcon: HiArrowRight,
    iconSize: 24,
  },
};
