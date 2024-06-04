import type { Preview } from "@storybook/react";
import '../src/demo/tokens.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    designTokens: {
      disable: false,
      defaultTab: "Colors",
      showSearch: true,
      editable: true,
    },
    actions: { disable: true }, // Disable the Actions tab
    interactions: { disable: true }, // Disable the Interactions tab
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },
    docs: {
      source: {
        type: 'code',
      },
    },
    layout: 'bottom', // Set the addon panel orientation to the bottom
  },
};

export default preview;
