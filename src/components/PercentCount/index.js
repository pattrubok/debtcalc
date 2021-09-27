import React, { useContext } from "react";
import styled from "styled-components";
import { Input } from "antd";

import { Row as AntRow, Col } from "antd";

import AppContext from "../../assets/func/context";

const PercentCount = () => {
  const {
    setValuePersent,
    valuePersent,
    setValueNumber,
    valueNumber,
  } = useContext(AppContext);
  const onChangeNumber = (e) => {
    setValueNumber(parseInt(e.target.value));
  };
  const onChangePersent = (e) => {
    setValuePersent(parseInt(e.target.value));
  };

  const condition = valueNumber && valuePersent;
  const result = condition
    ? (parseInt(valueNumber) / 100) * parseInt(valuePersent)
    : "Тут будет результат";

  return (
    <Wrapper>
      <Row gutter={[0, 20]}>
        <Col>
          <Text>Введите число</Text>
          <Input
            onChange={onChangeNumber}
            type='number'
            value={valueNumber}
            placeholder='Число'
          />
        </Col>
        <Col>
          <Text>Введите проценты от числа</Text>
          <Input
            placeholder='Процент'
            onChange={onChangePersent}
            value={valuePersent}
            type='number'
          />
        </Col>
        <Col className='col-result'>
          <Text>Результат:</Text>
          <div>{result}</div>
        </Col>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  .col-result {
    display: flex;
    justify-content: space-between;
    color: ${(p) => p.theme.color.primary};
    font-weight: bold;
  }
`;

const Row = styled(AntRow)`
  flex-direction: column;
`;
const Text = styled.div`
  margin-bottom: 10px;
`;

export default PercentCount;
