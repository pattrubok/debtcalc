import React, { useContext } from "react";
import styled from "styled-components";

import AppContext from "../../assets/func/context";
import { Row as AntRow, Col as AntCol, Input } from "antd";
import { paragraph } from "../../base/mixins/typography";

import { UiButton } from "../Ui";

const InputName = () => {
  const {
    setFirstName,
    firstName,
    setSecondName,
    secondName,
    addUserNames,
  } = useContext(AppContext);

  const onChangeFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const onChangeSecondName = (e) => {
    setSecondName(e.target.value);
  };

  return (
    <Wrapper>
      <Row gutter={[0, 40]}>
        <Col>
          <Title>Первое имя</Title>
          <Input
            placeholder='Введите первое имя'
            onChange={onChangeFirstName}
            value={firstName}
            type='string'
          />
        </Col>
        <Col>
          <Title>Второе имя</Title>
          <Input
            placeholder='Введите второе имя'
            onChange={onChangeSecondName}
            value={secondName}
            type='string'
          />
        </Col>
        <Col className='col-btn'>
          <UiButton onClick={addUserNames}>Создать пользователей</UiButton>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${paragraph};
`;

const Row = styled(AntRow)`
  flex-direction: column;
`;
const Col = styled(AntCol)`
  &.col-btn {
    .uibutton__wrapper {
      display: flex;
      justify-content: center;
    }
  }
`;

const Title = styled.div`
  margin-bottom: 10px;
`;

export default InputName;
