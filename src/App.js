import React, { useState, useEffect } from "react";
import styled from "styled-components";

import { AppContainer } from "./components";

import AppContext from "./assets/func/context";

import { api } from "./assets/func/api";

import notification from "./assets/func/notification";

const App = () => {
  // 1) раз заружается твой дефолт
  // 2) Во второй раз загружается то, что туда поместилось те-пустой массив
  // 3) Возникает ошибка
  //
  //
  //

  const [isFirstDrawer, setIsFirstDrawer] = useState(false);
  const [isSecondDrawer, setIsSecondDrawer] = useState(false);
  const [valuePurchase, setValuePurchashe] = useState("");
  const [valuePrice, setValuePrice] = useState("");
  const [valueName, setValueName] = useState("");
  const [valuePersent, setValuePersent] = useState("");
  const [valueNumber, setValueNumber] = useState("");
  const [data, setData] = useState([]);
  const [userNames, setUserNames] = useState();

  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");

  const fetchData = async () => {
    const response = await api.get("debts");
    setData(response);
  };

  const fetchUserNames = async () => {
    const response = await api.get("usernames");
    setUserNames(response);
  };

  useEffect(() => {
    fetchData();
    fetchUserNames();
  }, []);

  const showFirstDrawer = () => {
    setIsFirstDrawer(true);
  };

  const onCloseFirstDrawer = () => {
    setIsFirstDrawer(false);
    setValuePurchashe();
    setValuePrice();
    setValueName();
  };
  const showSecondDrawer = () => {
    setIsSecondDrawer(true);
  };

  const onCloseSecondDrawer = () => {
    setIsSecondDrawer(false);
    setValueNumber();
    setValuePersent();
  };

  const addData = () => {
    if (!valuePurchase || !valuePrice || !valueName) {
      const props = {
        message: "Данные не введены!",
        description: "Введите данные для отправки на сервер",
      };
      notification({ ...props });
      return;
    }
    if (Math.sign(valuePrice) === -1) {
      const props = {
        message: "Только положительное число!",
        description: "Цена должна быть только положительным числом",
      };
      notification({ ...props });
      return;
    }

    const valuePriceNumber = parseInt(valuePrice);
    const firstPersonDebt =
      valueName === userNames[0].person_1 ? 0 : valuePriceNumber;
    const secondPersonDebt =
      valueName === userNames[0].person_2 ? 0 : valuePriceNumber;

    const obj = {
      purchase: valuePurchase,
      price: valuePriceNumber,
      person_1_debt: firstPersonDebt,
      person_2_debt: secondPersonDebt,
    };

    api.post("debts", obj).then(() => {
      fetchData();
    });
    onCloseFirstDrawer();
  };

  const addUserNames = () => {
    if (!firstName || !secondName) {
      const props = {
        message: "Данные не введены!",
        description: "Введите данные для отправки на сервер",
      };
      notification({ ...props });
      return;
    }

    const obj = {
      person_1: firstName,
      person_2: secondName,
    };

    api.post("usernames", obj).then(() => {
      fetchUserNames();
    });
  };

  const loadCondition = data && userNames;

  return (
    <Wrapper>
      {loadCondition && userNames && (
        <AppContext.Provider
          value={{
            isFirstDrawer,
            valuePurchase,
            valuePrice,
            valueName,
            data,
            valuePersent,
            valueNumber,
            isSecondDrawer,
            onCloseSecondDrawer,
            showSecondDrawer,
            setValueNumber,
            setIsSecondDrawer,
            setValuePersent,
            setIsFirstDrawer,
            showFirstDrawer,
            onCloseFirstDrawer,
            addData,
            setValuePurchashe,
            setValuePrice,
            setValueName,
            setFirstName,
            firstName,
            setSecondName,
            secondName,
            addUserNames,
            userNames,
          }}
        >
          <AppContainer />
        </AppContext.Provider>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
