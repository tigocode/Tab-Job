import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit2, FiTrash2, FiSearch, FiChevronDown } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function TabJob() {
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const stringName = userName
  const resultado = stringName.split(" ")
  const nameSeparado = resultado.shift() + ' ' + resultado.slice(-1)[0]

  const [incidentTab, setIncidentTab] = useState([])
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    api.get('profileTabJob', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setIncidentTab(response.data)
    })
  }, [userId])



  const filtros = incidentTab.filter((filtro) => {    
    if (buscar != '') {
      return filtro.id  == buscar || filtro.sap == buscar || filtro.n_pedido == buscar
    }else{
      return filtro
    } 
  })
 
  function myFunction() {
    var x = document.getElementById("Demo");
    if (x.className.indexOf("dropdown-up") === -1) { 
      x.className = "dropdown-up";
    } else {
      x.className = x.className.replace("dropdown-up", "dropdown");
    }
  }

  return (
    <div className="tabjob-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
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
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>        
      </header>
      <div className="content">
        <form>
          <Link className="button" to="/tab+job+incidents">Novo pedido</Link>          
          <input 
            type="text" 
            placeholder="Buscar"
            onChange={e => setBuscar(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Id</th>
                <th>Status</th>
                <th>Cód. Sap</th>
                <th>Data</th>
                <th>Nº Pedido</th>
                <th>Qtd. Caixas</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              {filtros.map(incident => (
              <tr>
                <td className="back-button-edit">
                  <Link type="button">
                    <FiEdit2 size={18} color="#E03737" />
                  </Link>
                  <Link  type="button">
                    <FiTrash2 size={18} color="#E03737" />
                  </Link>
                  <Link type="button">
                   <FiSearch size={18} color="#E03737" />
                  </Link>
                </td>
              <td>{incident.id}</td>
                <td>{incident.status}</td>
                <td>{incident.sap}</td>
                <td>{incident.data}</td>
                <td>{incident.n_pedido}</td>
                <td>{incident.qtd_caixas}</td>
                <td>{incident.valor}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}