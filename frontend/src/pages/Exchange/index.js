import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function Exchange() {
  return (
    <div className="exchange-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <Link className="button" to="/exchange+incidents">Nova troca</Link>
          <input type="text" placeholder="Buscar" />
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Nº Solictação</th>
                <th>Status</th>
                <th>Cód. Sap</th>
                <th>Tipo</th>
                <th>Razão Social</th>
                <th>Data Solicitação</th>
                <th>Ultima Solicitação</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="back-button-edit">
                  <Link type="button">
                    <FiEdit size={18} color="#E03737" />
                  </Link>
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
                <td>Exch-01</td>
                <td>Aberto</td>
                <td>112200</td>
                <td>Cód Post</td>
                <td>Tiago Pereira Dantas</td>
                <td>16/12/1986</td>
                <td>12/12/2020</td>
              </tr>
              <tr>
                <td className="back-button-edit">
                  <Link type="button">
                    <FiEdit size={18} color="#E03737" />
                  </Link>
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
                <td>Exch-01</td>
                <td>Aberto</td>
                <td>112200</td>
                <td>Cód Post</td>
                <td>Tiago Pereira Dantas</td>
                <td>16/12/1986</td>
                <td>12/12/2020</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}