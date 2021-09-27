import React from "react";
import styled from "styled-components";
import { Button } from "antd";

const UiButton = ({ children, ...props }) => {
  return (
    <Wrapper className='uibutton__wrapper'>
      <Button type='primary' {...props}>
        {children}
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.uibutton__wrapper {
    .ant-btn {
      border-radius: 4px;
    }
  }
`;

export default UiButton;
