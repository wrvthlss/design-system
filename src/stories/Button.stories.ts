import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { fn } from '@storybook/test';

const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' }, // Explicitly define actions here
    backgroundColor: {
      control: 'text',
      description: 'Background color (accepts CSS color or CSS variable, e.g., --b100)',
    },
  },
  parameters: {
    storySource: {
      source: `
        export const Primary: Story = {
          args: {
            primary: true,
            label: "Button",
            backgroundColor: '--b100',
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
    backgroundColor: '--b100',
  },
  // Add explicit actions using fn
  parameters: {
    actions: { handles: [fn(() => console.log('Button clicked'))] },
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
