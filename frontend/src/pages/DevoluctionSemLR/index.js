import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function DevoluctionSemLR() {
  return (
    <div className="sem-container">
      <header>
        <img src={tabImg} alt="Tab Job" />
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <Link className="button">Nova devolução</Link>
          <input type="text" placeholder="Buscar" />
          <table>
            <thead>
                <tr>
                  <th>Ações</th>
                  <th>Tipo</th>
                  <th>Status</th>
                  <th>Cód. Sap</th>
                  <th>Perfil do Cliente</th>
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
                <td>DSL - 03</td>
                <td>Pendente</td>
                <td>15408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>6/1/1986</td>
                <td>6/12/1986</td>
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
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>15408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>6/1/1986</td>
                <td>6/12/1986</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}