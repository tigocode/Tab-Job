import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function Profile() {
  return (
    <div className="profile-container">
      <header>
        <img src={tabImg} alt="Tab Jab" />
        <span>Bem vindo, Tiago Dantas</span>
        <div className="dropdown">
          <span className="info">Dashboard</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
          </div>
        </div>
        <button className="button-logout" type="button">
          <FiPower size={18} color="#E03737" />
        </button>
      </header>

      <h1>Selecione seu Job</h1>

        <ul>
        <Link className="back-link-li" to="/vistalfa">
          <li>
            <strong>Vistalfa</strong>
            <p>Localize a gestão do cliente</p>
          </li>
        </Link>
        <Link className="back-link-li" to="/tab+job">
          <li>
            <strong>Tabulação de Pedidos</strong>
            <p>Registe e acompanhe aqui todos os pedidos</p>
          </li>
        </Link>
        <Link className="back-link-li" to="/package+facil">
          <li>
            <strong>Pacote Acuvue Fácil</strong>
            <p>Faça a solicitação de Ativação do Pacote Acuvue Fácil</p>
          </li>
        </Link>
        <Link className="back-link-li" to="/devoluction+com+lr">
          <li>
            <strong>Devoluções | Com LR</strong>
            <p>Registre as solicitações Com LR</p>
          </li>
        </Link>
        <Link className="back-link-li" to="/devoluction+sem+lr">
          <li>
            <strong>Devoluções | Sem LR</strong>
            <p>Registre as solicitações Sem LR</p>
          </li>
        </Link>
        <Link className="back-link-li" to="/exchange">
          <li>
            <strong>Trocas</strong>
            <p>Registe as solicitações de Trocas</p>
          </li>
        </Link>
        </ul>
    </div>
  )
}