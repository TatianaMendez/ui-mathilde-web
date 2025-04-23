import type { Meta, StoryObj } from '@storybook/react';
import Spinner from './spinner';

const meta = {
  title: 'Molecules/Spinner',
  component: Spinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div className="w-full max-w-2xl p-4">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    description: {
      control: 'text',
      description: 'Texto que se muestra debajo del spinner (acepta HTML)',
    },
  },
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithBoldText: Story = {
  args: {
    description: '<strong>Cargando</strong> datos importantes...',
  },
};

export const WithStyledText: Story = {
  args: {
    description:
      '<span style="color: #ff0000">Cargando</span> <em>datos</em> <strong>críticos</strong>...',
  },
};

export const WithCustomSize: Story = {
  args: {
    description: '<strong>Loading...</strong>',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '200px', height: '200px' }}>
        <Story />
      </div>
    ),
  ],
};
