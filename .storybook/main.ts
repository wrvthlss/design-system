import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"], // Only load stories files
  addons: [// "@storybook/addon-onboarding",
  "@storybook/addon-links", "@storybook/addon-essentials", 'storybook-design-token', '@storybook/addon-controls', '@storybook/addon-storysource'],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  staticDirs: ["../public"],
};
export default config;
