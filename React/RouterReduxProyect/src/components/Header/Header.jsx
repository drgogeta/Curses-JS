import "./Header.scss";

import logoPlatzi from "../../../assets/static/logo-platzi-video-BW2.png"
import userIcon from "../../../assets/static/user-icon.png"

import React from "react"
import { Link } from "react-router-dom";

const Header = () => (
  <div className="header">
    <Link to="/">
      <img className="header__img" src={logoPlatzi} alt="Platzi Video" />
    </Link>
    <div className="header__menu">
      <div className="header__menu--profile">
        <img src={userIcon} alt="" />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <Link to="/count">Cuenta</Link>
        </li>
        <li>
          <Link to="/login">Cerrar Sesión</Link>
        </li>
      </ul>
    </div>
  </div>
)

export default Header
