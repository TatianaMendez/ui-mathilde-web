import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './dropzone';

const meta = {
  title: 'Organisms/Dropzone',
  component: Dropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    accept: {
      control: 'select',
      options: [
        'application/pdf',
        'image/*',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv',
        'application/json',
      ],
      description: 'Tipos de archivo permitidos',
    },
    maxSize: {
      control: 'number',
      description: 'Tamaño máximo en MB',
    },
    multiple: {
      control: 'boolean',
      description: 'Permitir selección múltiple',
    },
    helperText: {
      control: 'text',
      description: 'Texto de ayuda personalizado',
    },
  },
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {
  args: {
    accept: 'application/pdf',
    maxSize: 10, // 10MB
    multiple: false,
  },
};

// Historia con múltiples tipos de archivo
export const MultipleFileTypes: Story = {
  args: {
    accept: [
      'application/pdf',
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ],
    maxSize: 5, // 5MB
    multiple: false,
  },
};

// Historia para imágenes
export const ImageUpload: Story = {
  args: {
    accept: 'image/*',
    maxSize: 2, // 2MB
    multiple: true,
  },
};

// Historia para hojas de cálculo
export const SpreadsheetUpload: Story = {
  args: {
    accept: [
      'application/vnd.ms-excel',
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      'text/csv',
    ],
    maxSize: 15, // 15MB
    multiple: false,
  },
};

// Historia con tamaño máximo grande
export const LargeFileUpload: Story = {
  args: {
    accept: ['application/pdf'],
    maxSize: 100, // 100MB
    multiple: false,
  },
};

// Historia con selección múltiple
export const MultipleFiles: Story = {
  args: {
    accept: 'application/json',
    maxSize: 1, // 1MB
    multiple: true,
    helperText: 'Arrastra o selecciona múltiples archivos JSON',
  },
};
