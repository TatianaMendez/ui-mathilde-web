import type { Meta, StoryObj } from '@storybook/react';
import { Dropzone } from './dropzone';

export const meta = {
  title: 'Organisms/Dropzone',
  component: Dropzone,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-[600px]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Dropzone>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia básica
export const Default: Story = {};

// Historia con fondo oscuro
export const DarkMode: Story = {
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    theme: 'dark',
  },
};
