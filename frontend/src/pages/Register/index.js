import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'
import avatar from '../../assets/avatar.svg'

export default function Register() {
  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={tabImg} alt="Tab Job" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro para ultilizar os benéficos da plataforma TAB JOB.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E03737" />
            Voltar
          </Link>
        </section>
        <form>
          <label htmlFor="img">
            <img src={avatar} height="80" alt="Tab Job" />
          </label>
          <input type="file" id="img" accept="image/*" />

            <input placeholder="Nome"/>
            <input type="email" placeholder="E-mail" />            

          <div className="input-group">
            <input placeholder="CPF"/>          
            <input placeholder="Telefone"/>
          </div>
          
          <div className="input-group">
            <input placeholder="Celular"/>
            <input type="password" placeholder="Senha" />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}


