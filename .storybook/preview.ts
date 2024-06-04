import type { Preview } from "@storybook/react";
import designTokens from "storybook-design-token"

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
    }
  },
};

export default preview;
