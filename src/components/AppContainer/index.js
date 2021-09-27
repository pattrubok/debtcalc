import React, { useContext } from "react";
import styled from "styled-components";

import { Main } from "../../components";
import AppContext from "../../assets/func/context";

const AppContainer = () => {
  const {
    isFirstDrawer,
    isSecondDrawer,
    onCloseFirstDrawer,
    onCloseSecondDrawer,
    showFirstDrawer,
    data,
    userNames,
  } = useContext(AppContext);

  const lastItem = data.length && data[data.length - 1];
  const purchase = lastItem.purchase || "название трат";

  const date = (data.length && lastItem.createdAt.substr(0, 10)) || "дата тут";

  const firstPersonDebt = data.map((item) => item.person_1_debt);
  const secondPersonDebt = data.map((item) => item.person_2_debt);

  const reducer = (accumulator, currentValue) => accumulator + currentValue;

  const summFirstPersonDebt = firstPersonDebt.reduce(reducer, 0);
  const summSecondPersonDebt = secondPersonDebt.reduce(reducer, 0);

  const allSummDebt = summFirstPersonDebt - summSecondPersonDebt;

  const result = () => {
    const obj_1 = {
      name: userNames.length > 0 && userNames[0].person_1,
      summ: allSummDebt,
    };
    const obj_2 = {
      name: userNames.length > 0 && userNames[0].person_2,
      summ: Math.abs(allSummDebt),
    };

    const obj_3 = {
      name: "Никто никому не должен",
      summ: 0,
    };

    if (Math.sign(allSummDebt) === 1) {
      return obj_1;
    }
    if (Math.sign(allSummDebt) === -1) {
      return obj_2;
    }
    if (allSummDebt === 0) {
      return obj_3;
    }
  };

  const drawersProps = [
    {
      height: "100%",
      title: "Отправка данных на сервер",
      placement: "top",
      closable: true,
      onClose: onCloseFirstDrawer,
      visible: isFirstDrawer,
      maskStyle: {
        fontSize: "12px",
      },
    },
    {
      title: "Просчет процента от числа",
      height: "60%",
      placement: "top",
      closable: true,
      onClose: onCloseSecondDrawer,
      visible: isSecondDrawer,
      maskStyle: {
        fontSize: "12px",
      },
    },
  ];

  const props = {
    date: date,
    purchase: purchase,
    result: result(),
    showFirstDrawer: showFirstDrawer,
    userNames: userNames,
  };

  return (
    <Wrapper>
      <Main {...drawersProps} {...props} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  overflow: auto;

  background-image: url("/static/img/background.png");
  background-size: 50%;
  background-repeat: repeat;
`;

export default AppContainer;
