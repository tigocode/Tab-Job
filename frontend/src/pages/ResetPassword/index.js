import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/TabJob.png'

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={tabImg} alt="Tab Job" />

          <h1>Reset de Senha</h1>
          <p>Informe a senha anterior e cadastre sua nova senha.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E03737" />
            Voltar
          </Link>
        </section>
        <form>
            <input type="password" placeholder="Senha antiga" />
            <input type="password" placeholder="Criar senha" />
            <input type="password" placeholder="Redigitar a senha" />

            <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}


