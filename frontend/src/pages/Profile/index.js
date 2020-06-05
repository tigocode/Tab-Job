import React from 'react'
import { Link } from 'react-router-dom'
import { FiPower, FiChevronDown } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function Profile() {
  const userName = localStorage.getItem('userName')

  const stringName = userName
  const resultado = stringName.split(" ")

  const nameSeparado = resultado.shift() + ' ' + resultado.slice(-1)[0]

  function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("dropdown-up") === -1) { 
      x.className = "dropdown-up";
    } else {
      x.className = x.className.replace("dropdown-up", "dropdown");
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={tabImg} alt="Tab Jab" />
        <span>Bem vindo, {nameSeparado}</span>
        <div id="Demo" className="dropdown">
          <span onClick={myFunction} className="info">Dashboard</span><FiChevronDown className="icon" />
          <div className="dropdown-content">
            <li>
              <strong>Meta</strong>
              <p>R$ 100.000,00</p>
            </li>
            <li>
              <strong>Realizado Mês</strong>
              <p>R$ 90.000,00</p>
            </li>
            <li>
              <strong>% Atingimento</strong>
              <p>90%</p>
            </li>
            <li>
              <strong>Meta Dia</strong>
              <p>R$ 5.000,00</p>
            </li>
            <li>
              <strong>Realizado Dia</strong>
              <p>R$ 5.000,00</p>
            </li>
            <li>
              <strong>% Atingimento</strong>
              <p>100%</p>
            </li>  
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