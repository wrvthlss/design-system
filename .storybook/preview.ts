import type { Preview } from "@storybook/react";
import '../src/demo/tokens.css'; // Ensure the path is correct

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    designTokens: {
      tabs: ['Colors', 'FontSize', 'LetterSpacing', 'Border', 'Opacity'],
      disable: false,
      defaultTab: "Colors",
      showSearch: false,
      editable: false,
    },
    actions: { disable: true },
    interactions: { disable: true },
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
    layout: 'bottom',
  },
};

export default preview;
