import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: {
      control: 'text', // Use text control to accept both CSS colors and variables
      description: 'Background color (accepts CSS color or CSS variable, e.g., --b100)',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    backgroundColor: '--b100', // Example using CSS variable
  },
};

export const ColorsOnly: Story = {
  args: { ...Primary.args },
  parameters: {
    designToken: {
      tabs: ['Colors'],
    },
  },
};
