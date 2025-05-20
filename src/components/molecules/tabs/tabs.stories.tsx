import type { Meta, StoryObj } from '@storybook/react';
import { TabsComponent as TabsComponent } from './tabs';

const meta: Meta<typeof TabsComponent> = {
  title: 'Molecules/Tabs',
  component: TabsComponent,
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
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

export const Default: Story = {
  render: () => <TabsComponent />,
};

export const WithCustomContent: Story = {
  render: () => <TabsComponent />,
};
