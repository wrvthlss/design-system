import type { Preview } from "@storybook/react";
import '../src/demo/tokens.css'

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
    actions: { argTypesRegex: "^on[A-Z].*" },
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
  },
};

export default preview;