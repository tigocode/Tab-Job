import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function TabJob() {
  return (
    <div className="tabjob-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <div className="dropdown">
          <span className="info">Dashboard</span>
          <div className="dropdown-content">
            <p>Hello World!</p>
            <p>Hello World!</p>
          </div>
        </div>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>        
      </header>
      <div className="content">
        <form>
          <Link className="button">Novo pedido</Link>          
          <input type="text" placeholder="Buscar" />
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
                <td>01</td>
                <td>Pendente</td>
                <td>112200</td>
                <td>16/12/1986</td>
                <td>12547896</td>
                <td>100</td>
                <td>R$ 100</td>
              </tr>
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
                <td>02</td>
                <td>Pendente</td>
                <td>112200</td>
                <td>16/12/1986</td>
                <td>12547896</td>
                <td>100</td>
                <td>R$ 100</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}