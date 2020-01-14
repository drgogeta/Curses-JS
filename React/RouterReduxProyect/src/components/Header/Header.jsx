import "./Header.scss";

import logoPlatzi from "../../../assets/static/logo-platzi-video-BW2.png"
import userIcon from "../../../assets/static/user-icon.png"

import React from "react"

const Header = () => (
    <div className="header">
        <img className="header__img" src={logoPlatzi} alt="Platzi Video" />
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    <a href="/">Cuenta</a>
                </li>
                <li>
                    <a href="/">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </div>
)

export default Header
