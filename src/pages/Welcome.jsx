import React, { useEffect, useState, useContext } from 'react';
import { Header } from '../components/Header';
import AppLabel from '../components/AppLeable';
import {AppButton} from '../components/AppButton';
import { useNavigate } from 'react-router-dom';
import { themes, ThemeContext } from "../contexts/themeContext"; 
const Welcome = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useContext(ThemeContext); // Получаем тему и функцию для переключения
  const phoneRegex = /^\+?\d{1,4}?[\s-]?\(?\d{1,4}\)?[\s-]?\d{1,4}[\s-]?\d{1,4}[\s-]?\d{1,9}$/;
  const nameRegex = /^[a-zA-Zа-яА-ЯёЁ]{1,20}$/;
  const [nameValue, setNameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [checkBtn, setCheckBtn] = useState(true);
  const [nameError, setNameError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const goToNextPage = () => {
    navigate('/step-two');
  };

  const handleClick = () => {
    const isNameError = !nameRegex.test(nameValue);
    const isPhoneError = !phoneRegex.test(phoneValue);

    setNameError(isNameError);
    setPhoneError(isPhoneError);

    if (!isNameError && !isPhoneError) {
      goToNextPage();
    }
  };

  useEffect(() => {
    if (nameValue && phoneValue) {
      setCheckBtn(false);
    } else {
      setCheckBtn(true);
    }
  }, [nameValue, phoneValue]);

  const handleToggleTheme = () => {
    toggleTheme(); // Вызываем функцию для смены темы
  };

  return (
    <div className={`container ${theme}`}> {/* Добавляем класс для темы */}
      <button onClick={handleToggleTheme}>
        Сменить тему на {theme === 'light' ? 'темную' : 'светлую'}
      </button>
      <div className="wrapper">
        <div className="welcome">
          <Header
            headerType="h1"
            headerText="Добро пожаловать в квиз от лучшего учебного центра"
          />
          <form className="welcome__form">
            <AppLabel
              labelText="Ваше имя"
              errorText="Введите Имя в правильном формате"
              id="username"
              isRequired
              inputPlaceholder="Имя"
              inputType="text"
              labelChange={setNameValue}
              labelValue={nameValue}
              hasError={nameError}
            />
            <AppLabel
              labelText="Ваш номер"
              errorText="Введите номер в правильном формате например"
              id="phone"
              hasError={phoneError}
              isRequired={true}
              labelChange={setPhoneValue}
              labelValue={phoneValue}
              inputPlaceholder="+998 9- --- -- --"
              inputType="text"
            />
            <AppButton
              isDisabled={checkBtn}
              buttonClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
