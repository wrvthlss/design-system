import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import "./dropdown.css";

const meta: Meta<typeof Dropdown> = {
  title: "Example/Dropdown",
  component: Dropdown,
  argTypes: {
    options: {
      control: 'object',
      description: 'List of options for the dropdown',
    },
    initialBackgroundColor: {
      control: 'text',
      description: 'Initial background color of the dropdown',
    },
    hoverTextColor: {
      control: 'color',
      description: 'Hover text color for dropdown options',
    },
    disabled: {
      control: 'boolean',
      description: 'Toggle to enable or disable the dropdown',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transformSource: (source: string, storyContext: any) => {
          const { args } = storyContext;
          return `
            <Dropdown 
              options={${JSON.stringify(args.options)}} 
              initialBackgroundColor="${args.initialBackgroundColor}" 
              hoverTextColor="${args.hoverTextColor}" 
              disabled={${args.disabled}} 
            />
          `;
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

// Anthem Dropdown Story
export const Anthem: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    initialBackgroundColor: "white",
    hoverTextColor: "#3B71E9",
    disabled: false,
  },
};

// Carelon Dropdown Story
export const Carelon: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    initialBackgroundColor: "white",
    hoverTextColor: "#794CFF",
    disabled: false,
  },
};

// Elevance Dropdown Story
export const Elevance: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    initialBackgroundColor: "white",
    hoverTextColor: "#2861BB",
    disabled: false,
  },
};

// Wellpoint Dropdown Story
export const Wellpoint: Story = {
  args: {
    options: ["Option 1", "Option 2", "Option 3"],
    initialBackgroundColor: "white",
    hoverTextColor: "#2861BB",
    disabled: false,
  },
};
