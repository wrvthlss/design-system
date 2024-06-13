import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: Checkbox,
  argTypes: {
    initialBackgroundColor: {
      control: 'text',
      description: 'Initial background color (accepts CSS color or CSS variable, e.g., --p100)',
    },
    hoverBackgroundColor: {
      control: 'text',
      description: 'Hover background color (accepts CSS color or CSS variable, e.g., --p200)',
    },
    selectedBackgroundColor: {
      control: 'text',
      description: 'Selected background color (accepts CSS color or CSS variable, e.g., --p300)',
    },
    height: {
      control: 'text',
      description: 'Height of the checkbox',
    },
    width: {
      control: 'text',
      description: 'Width of the checkbox',
    },
    borderRadius: {
      control: 'text',
      description: 'Border radius of the checkbox',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable/enable the checkbox',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transformSource: (source: string, storyContext: any) => {
          const { args } = storyContext;
          return `
            <Checkbox 
              initialBackgroundColor="${args.initialBackgroundColor}" 
              hoverBackgroundColor="${args.hoverBackgroundColor}" 
              selectedBackgroundColor="${args.selectedBackgroundColor}" 
              height="${args.height}" 
              width="${args.width}" 
              borderRadius="${args.borderRadius}" 
              disabled={${args.disabled}} 
            />
          `;
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Anthem: Story = {
  args: {
    initialBackgroundColor: "var(--w100)",
    hoverBackgroundColor: "var(--p100)",
    selectedBackgroundColor: "var(--p200)",
    height: "24px",
    width: "24px",
    borderRadius: "8px",
    disabled: false,
  },
};
