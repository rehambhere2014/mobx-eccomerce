import React, { useState } from 'react';
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from 'i18next';
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa';
import { CartBtn, Wrapper } from './cartbutton.style';

const CartButtons = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState('en')
  return (
    <Wrapper>
      <CartBtn lang={i18n.language}>
        <span>{t('cart')}</span>
        <div className="cart-container">
          <FaShoppingCart />
          <span className="cart-value">6</span>
        </div>
      </CartBtn>


      <CartBtn lang={i18n.language}>
        <span>{t('login')}</span>
        <FaUserPlus />
      </CartBtn>


    </Wrapper>


  )
}
export default CartButtons