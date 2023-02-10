import type { Meta, StoryObj } from "@storybook/react";

import Notification from "../components/Notification";
// More on how to set up stories at: https://storybook.js.org/docs/7.0/react/writing-stories/introduction
const meta: Meta<typeof Notification> = {
  title: "Example/Notification",
  component: Notification,
  argTypes: {
    type: { control: "select", options: ["info", "error"] },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Info: Story = {
  args: {
    type: "info",
    content: "This is a sample alert message",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    content: "This is a sample error message",
  },
};
