import React from "react";
import styled from "styled-components";

import { Drawer } from "antd";

const UiDrawer = ({ children, ...props }) => {
  return (
    <Wrapper>
      <Drawer {...props}>{children}</Drawer>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default UiDrawer;
