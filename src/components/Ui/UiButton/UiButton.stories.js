import React from "react";
import { storiesOf } from "@storybook/react";
import UiButton from ".";

storiesOf("Components|Ui/UiButton", module)
  // DEFAULT
  .add("primary", () => <UiButton type='primary'>ПОДРОБНЕЕ</UiButton>)
  .add("secondary", () => <UiButton type='secondary'>ПОДРОБНЕЕ</UiButton>);
