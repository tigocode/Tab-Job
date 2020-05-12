import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogIn, FiLock } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/TabJob.png'

export default function Login() {
  return (
    <div className="login-container">
      <img src={tabImg} alt="Tab Job" />
      <hr />
      <section className="form">
        <form>
          <h1>Faça seu login</h1>

          <input placeholder="Sua ID" />
          <input type="password" name="" id="" placeholder="Sua Senha" />
          <button className="button" type="submit">Acessar</button>
          <div>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E03737" />
            Faça seu cadastro
          </Link>
          <Link className="back-link" to="/resetpass">
            <FiLock size={16} color="#E03737" />
            Esqueceu a senha?
          </Link>
          </div>
        </form>
      </section>
    </div>
  )
}