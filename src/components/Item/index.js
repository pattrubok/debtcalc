import React, { useContext } from "react";
import styled from "styled-components";

import { Row as AntRow, Col, Input } from "antd";
import { UiButton, UiDrawer } from "../Ui";

import AppContext from "../../assets/func/context";

import { PercentCount } from "../";

const Item = ({ ...drawerProps }) => {
  const {
    addData,
    setValuePurchashe,
    setValuePrice,
    setValueName,
    valuePurchase,
    valuePrice,
    showSecondDrawer,
    userNames,
  } = useContext(AppContext);

  const onChangePurchase = (e) => {
    setValuePurchashe(e.target.value);
  };

  const onChangePrice = (e) => {
    setValuePrice(e.target.value);
  };

  return (
    <Wrapper className='wrapper-item'>
      <Row gutter={[0, 20]}>
        <Col>
          <Text>Введите название трат</Text>
          <Input
            placeholder='Введите название последней операции'
            onChange={onChangePurchase}
            value={valuePurchase}
            type='string'
          />
        </Col>
        <Col>
          <Text>Введите истраченную сумму</Text>
          <Input
            onChange={onChangePrice}
            value={valuePrice}
            type='number'
            placeholder='Введите сумму числом'
          />
        </Col>
        <Col className='col-with-btn'>
          <Text>Кто оплатил покупку?</Text>
          <div>
            <UiButton
              onClick={() => setValueName(userNames[0].person_1)}
              type='secondary'
            >
              {userNames[0].person_1}
            </UiButton>
            <UiButton
              onClick={() => setValueName(userNames[0].person_2)}
              type='secondary'
            >
              {userNames[0].person_2}
            </UiButton>
          </div>
        </Col>
        <Col className='col-with-addbtn'>
          <UiButton onClick={addData}>Отправить данные на сервер</UiButton>
        </Col>
      </Row>
      <Row className='row-percent'>
        <Col className='col-percent'>
          <UiButton onClick={showSecondDrawer} type='secondary'>
            Просчет процентов от числа
          </UiButton>
        </Col>
      </Row>
      <UiDrawer {...drawerProps}>
        <PercentCount />
      </UiDrawer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;

  .col-with-btn {
    flex-direction: column;
    text-align: center;
    div:nth-child(2) {
      display: flex;
      justify-content: space-between;
    }
  }
  .col-with-addbtn {
    .uibutton__wrapper {
      display: flex;
      justify-content: center;
    }
  }
  .col-percent {
    display: flex;
    justify-content: center;
  }
`;

const Row = styled(AntRow)`
  display: flex;
  flex-direction: column;
`;
const Text = styled.div`
  margin-bottom: 10px;
`;

export default Item;
