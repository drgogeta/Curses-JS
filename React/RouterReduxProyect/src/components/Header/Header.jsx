import React from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux"

import "./Header.scss";

import logoPlatzi from "../../../assets/static/logo-platzi-video-BW2.png"
import userIcon from "../../../assets/static/user-icon.png"

import gravatar from "../../utils/gravatar";

import { logoutRequest } from "../../actions";

const Header = props => {
  const { user } = props

  const hasUser = Object.keys(user).length > 0

  const handleLogout = () => {
    props.logoutRequest({})
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header__img" src={logoPlatzi} alt="Platzi Video" />
      </Link>
      <div className="header__menu">
        <div className="header__menu--profile">
          {hasUser ?
            <img src={gravatar(user.email)} alt={user.email} /> :
            <img src={userIcon} />
          }
          <p>Perfil</p>
        </div>
        <ul>
          {hasUser ?
            <>
              <li>
                <Link to="/count">{user.name}</Link>
              </li>
              <li>
                <Link to="#logout" onClick={handleLogout}>Cerrar Sesión</Link>
              </li>
            </> :
            <li>
              <Link to="/login">Iniciar Sesión</Link>
            </li>
          }
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
