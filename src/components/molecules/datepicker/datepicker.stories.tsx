import type { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from "./datepicker";

const meta: Meta<typeof DatePicker> = {
  title: 'Molecules/DatePicker',
  component: DatePicker,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    minDate: new Date(2023, 0, 1),
    maxDate: new Date(2023, 3, 30),
  },
};
