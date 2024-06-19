import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import '../demo/tokens.css'; // Ensure the path is correct

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

// Define stories
export const Anthem: Story = {
  args: {
    primary: false,
    label: "Anthem Button",
    initialBackgroundColor: "--anthem-brand-100",
    hoverBackgroundColor: "--anthem-brand-200",
    activeBackgroundColor: '--anthem-brand-300',
    showIcon: false,
    size: "medium"
  },
};

export const Carelon: Story = {
  args: {
    primary: true,
    label: "Carelon Button",
    initialBackgroundColor: "--carelon-brand-100",
    hoverBackgroundColor: "--carelon-brand-200",
    activeBackgroundColor: '--carelon-brand-300',
    showIcon: false,
  },
};

export const Elevance: Story = {
  args: {
    primary: true,
    label: "Elevance Button",
    initialBackgroundColor: "--elevance-brand-100",
    hoverBackgroundColor: "--elevance-brand-200",
    activeBackgroundColor: '--elevance-brand-300',
    showIcon: false,
  },
};

export const Wellpoint: Story = {
  args: {
    primary: true,
    label: "Wellpoint Button",
    initialBackgroundColor: "--wellpoint-brand-100",
    hoverBackgroundColor: "--wellpoint-brand-200",
    activeBackgroundColor: '--wellpoint-brand-300',
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

