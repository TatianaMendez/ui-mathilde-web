import type { Meta, StoryObj } from '@storybook/react';

import { LayoutOutside } from './layoutOutside';

const meta: Meta<typeof LayoutOutside> = {
  title: 'Template/Layout',
  component: LayoutOutside,
};

export default meta;
type Story = StoryObj<typeof LayoutOutside>;

export const Default: Story = {};
