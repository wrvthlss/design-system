import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Example/Checkbox",
  component: Checkbox,
  argTypes: {
    initialColor: {
      control: 'text',
      description: 'Initial background color (accepts CSS color or CSS variable, e.g., --b100)',
    },
    hoverColor: {
      control: 'text',
      description: 'Hover background color (accepts CSS color or CSS variable, e.g., --b500)',
    },
    checkedColor: {
      control: 'text',
      description: 'Checked background color (accepts CSS color or CSS variable, e.g., --b900)',
    },
    disabled: {
      control: 'boolean',
      description: 'Toggle to enable or disable the checkbox',
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
              initialColor="${args.initialColor}" 
              hoverColor="${args.hoverColor}" 
              checkedColor="${args.checkedColor}" 
              disabled={${args.disabled}} 
              label="${args.label}" 
            />
          `;
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

// Anthem Checkbox Story - Set as Default
export const Anthem: Story = {
  args: {
    label: "Anthem Checkbox",
    initialColor: "white",
    hoverColor: "#80CEFF",
    checkedColor: "#1355E9",
    disabled: false,
  },
};

// Carelon Checkbox Story
export const Carelon: Story = {
  args: {
    label: "Carelon Checkbox",
    initialColor: "white",
    hoverColor: "hsl(255.08,100%,64.9%)",
    checkedColor: "hsl(264.78,54.33%,49.8%)",
    disabled: false,
  },
};

// Elevance Checkbox Story
export const Elevance: Story = {
  args: {
    label: "Elevance Checkbox",
    initialColor: "white",
    hoverColor: "hsl(216.73,64.76%,44.51%)",
    checkedColor: "hsl(221.12,63.12%,27.65%)",
    disabled: false,
  },
};

// Wellpoint Checkbox Story
export const Wellpoint: Story = {
  args: {
    label: "Wellpoint Checkbox",
    initialColor: "white",
    hoverColor: "hsl(216.73,64.76%,44.51%)",
    checkedColor: "hsl(221.12,63.12%,27.65%)",
    disabled: false,
  },
};
