import googleIcon from '../../../assets/static/google-icon.png'
import twitterIcon from '../../../assets/static/twitter-icon.png'

import './Login.scss'

import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => (
  <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__container--form">
        <input className="input" type="text" placeholder="Correo" />
        <input className="input" type="password" placeholder="Contraseña" />
        <button className="button">Iniciar sesión</button>
        <div className="login__container--remember-me">
          <label>
            <input type="checkbox" id="cbox1" value="first_checkbox" /> Recuérdame
          </label>
          <Link to="/forgotPassword">
            Olvidé mi contraseña
          </Link>
        </div>
      </form>
      <section className="login__container--social-media">
        <div><img src={googleIcon} /> Inicia sesión con Google</div>
        <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
      </section>
      <p className="login__container--register">No tienes ninguna cuenta
        <Link to="/register">Regístrate</Link>
      </p>
    </section>
  </section>
)

export default Login
