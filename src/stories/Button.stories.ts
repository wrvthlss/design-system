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

// Anthem Button Story - Set as Default
export const Anthem: Story = {
  args: {
    primary: true,
    label: "Anthem Button",
    initialBackgroundColor: "--p100",
    hoverBackgroundColor: "--p200",
    activeBackgroundColor: '--p300',
    showIcon: false,
    size: "medium"
  },
};

// Carelon Button Story
export const Carelon: Story = {
  args: {
    primary: true,
    label: "Carelon Button",
    initialBackgroundColor: "--c100",
    hoverBackgroundColor: "--c200",
    activeBackgroundColor: '--c300',
    showIcon: false,
  },
};

// Elevance Button Story
export const Elevance: Story = {
  args: {
    primary: true,
    label: "Elevance Button",
    initialBackgroundColor: "--e100",
    hoverBackgroundColor: "--e200",
    activeBackgroundColor: '--e300',
    showIcon: false,
  },
};

// Wellpoint Button Story
export const Wellpoint: Story = {
  args: {
    primary: true,
    label: "Wellpoint Button",
    initialBackgroundColor: "--wp100",
    hoverBackgroundColor: "--wp200",
    activeBackgroundColor: '--wp300',
    showIcon: false,
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

