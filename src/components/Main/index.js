import React from "react";
import styled from "styled-components";
import { Row as AntRow, Col as AntCol } from "antd";

import { UiButton, UiDrawer } from "../Ui";
import { Item, InputName } from "../";
import { paragraph } from "../../base/mixins/typography";

import "./style.less";

const Main = ({
  userNames,
  date,
  purchase,
  result,
  showFirstDrawer,
  ...drawersProps
}) => {
  return (
    <Wrapper>
      {userNames.length === 0 ? (
        <div>
          <InputName />
        </div>
      ) : (
        <div>
          <Row gutter={[0, 40]}>
            <Col>
              <Text>Дата последней операции</Text>
              <Info>{date}</Info>
            </Col>
            <Col>
              <Text>Последняя операция</Text>
              <Info>{purchase}</Info>
            </Col>
            <Col>
              <Text>Имя должника</Text>
              <Info>{result.name}</Info>
            </Col>
            <Col>
              <Text>Сумма долга</Text>
              <Info>{result.summ} руб.</Info>
            </Col>
            <Col>
              <UiButton onClick={showFirstDrawer}>Ввести данные</UiButton>
            </Col>
          </Row>
          <UiDrawer {...drawersProps[0]}>
            <Row
              justify='space-between'
              style={{
                height: "100%",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <Col flex={1}>
                <Item {...drawersProps[1]} />
              </Col>
            </Row>
          </UiDrawer>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${paragraph};
  padding: 25px;
  border-radius: 25px;
  background-color: ${(p) => p.theme.color.white};
`;

const Row = styled(AntRow)`
  display: flex;
  flex-direction: column;
`;

const Col = styled(AntCol)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Text = styled.div`
  margin-bottom: 5px;
  white-space: nowrap;
`;
const Info = styled.div`
  font-weight: bold;
  color: ${(p) => p.theme.color.primary};
`;

export default Main;
