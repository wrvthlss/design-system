import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    initialBackgroundColor: {
      control: 'text',
      description: 'Initial background color (accepts CSS color or CSS variable, e.g., --b100)',
    },
    hoverBackgroundColor: {
      control: 'text',
      description: 'Hover background color (accepts CSS color or CSS variable, e.g., --b500)',
    },
    activeBackgroundColor: {
      control: 'text',
      description: 'Active background color (accepts CSS color or CSS variable, e.g., --b900)',
    },
  },
  parameters: {
    storySource: {
      source: `
        export const Primary: Story = {
          args: {
            primary: true,
            label: "Button",
            initialBackgroundColor: '--b100',
            hoverBackgroundColor: '--b500',
            activeBackgroundColor: '--b900',
          },
        };
      `,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    initialBackgroundColor: '--b100',
    hoverBackgroundColor: '--b500',
    activeBackgroundColor: '--b900',
  },
};
