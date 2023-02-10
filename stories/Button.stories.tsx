import type { Meta, StoryObj } from "@storybook/react";

import Button from "../components/Button";
import { CarbonButton } from "@carbon/react";
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    kind: { control: "select", options: ["primary", "secondary"] },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/7.0/react/writing-stories/args
export const Primary: Story = {
  args: {
    kind: "primary",
    children: "Click me",
  },
};

export const Secondary: Story = {
  args: {
    kind: "secondary",
    children: "Click me",
  },
};
