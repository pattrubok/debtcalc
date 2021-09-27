const webpack = require("webpack");
const path = require("path");

module.exports = {
  alias: {
    assets: path.join(__dirname, "../src"),
  },

  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "storybook-preset-craco",
  ],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
