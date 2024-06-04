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
    showIcon: {
      control: 'boolean',
      description: 'Toggle to show or hide the icon',
    },
    primary: {
      control: 'boolean',
      description: 'Primary state of the button',
    },
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transformSource: (source: string, storyContext: any) => {
          const { args } = storyContext;
          return `
            <Button 
              primary={${args.primary}} 
              initialBackgroundColor="${args.initialBackgroundColor}" 
              hoverBackgroundColor="${args.hoverBackgroundColor}" 
              activeBackgroundColor="${args.activeBackgroundColor}" 
              showIcon={${args.showIcon}} 
              label="${args.label}" 
            />
          `;
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Button",
    initialBackgroundColor: '--p100',
    hoverBackgroundColor: '--p200',
    activeBackgroundColor: '--p300',
    showIcon: true,
    size: "large"
  },
};



// import type { Meta, StoryObj } from "@storybook/react";
// import { Button } from "./Button";

// const meta: Meta<typeof Button> = {
//   title: "Example/Button",
//   component: Button,
//   argTypes: {
//     initialBackgroundColor: {
//       control: 'text',
//       description: 'Initial background color (accepts CSS color or CSS variable, e.g., --b100)',
//     },
//     hoverBackgroundColor: {
//       control: 'text',
//       description: 'Hover background color (accepts CSS color or CSS variable, e.g., --b500)',
//     },
//     activeBackgroundColor: {
//       control: 'text',
//       description: 'Active background color (accepts CSS color or CSS variable, e.g., --b900)',
//     },
//     showIcon: {
//       control: 'boolean',
//       description: 'Toggle to show or hide the icon',
//     },
//   },
//   parameters: {
//     storySource: {
//       source: `
//         export const Primary: Story = {
//           args: {
//             primary: true,
//             label: "Button",
//             initialBackgroundColor: '--p100',
//             hoverBackgroundColor: '--p200',
//             activeBackgroundColor: '--p300',
//             showIcon: false,
//           },
//         };
//       `,
//     },
//   },
// };

// export default meta;
// type Story = StoryObj<typeof Button>;

// export const Primary: Story = {
//   args: {
//     primary: true,
//     label: "Button",
//     initialBackgroundColor: '--p100',
//     hoverBackgroundColor: '--p200',
//     activeBackgroundColor: '--p300',
//     showIcon: false,
//   },
// };
