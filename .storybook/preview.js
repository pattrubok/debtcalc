import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "../src/base/theme";
import { addDecorator } from "@storybook/react";

import "../src/base/fonts.less";
import "../src/base/antd.less";

addDecorator((story) => {
  return <ThemeProvider theme={theme}>{story()}</ThemeProvider>;
});
