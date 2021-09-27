import React from "react";
import { storiesOf } from "@storybook/react";
import Main from ".";

const props = {
  date: "21.01.1972",
  purchase: "Wallmart",
  name: "John",
  price: 1234,
};

storiesOf("Components", module).add("Main", () => {
  return <Main {...props} />;
});
