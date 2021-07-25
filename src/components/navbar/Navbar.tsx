import React from 'react'
import logo from '../../assets/logo.svg'
import { FaBars } from 'react-icons/fa'
import LangsComponents from '../LangsComponents'
import { BoxRight, Logo, NavHeader, NavLinks, Toggle } from './navbar.style'
import { Links } from '../../utils/contacts/Links'
import { Link } from 'react-router-dom'
import { useTranslation, initReactI18next } from "react-i18next";
import i18next from 'i18next';
import CartButtons from '../cartButton/CartButton'

const Navbar = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="container">

      <NavHeader>
        <Logo src={logo} alt="logo" />
        <NavLinks>
          {Links.map(item => {
            return <li key={item.id}>
              <Link to={item.url}>{t(item.text)}</Link>
            </li>
          })}
        </NavLinks>
        <BoxRight>
          <Toggle><FaBars /></Toggle>
          <CartButtons />
          <LangsComponents />

        </BoxRight>



      </NavHeader>


    </div>
  )
}

export default Navbar