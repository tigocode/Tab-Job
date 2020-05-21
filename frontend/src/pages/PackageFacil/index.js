import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit, FiEdit2, FiTrash2 } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function PackageFacil() {
  return (
    <div className="package-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <Link className="button" to="/package+incidents">Novo pacote</Link>
          <input type="text" placeholder="Buscar" />
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Nº da Solicitação</th>
                <th>Cód. Sap</th>
                <th>Razão Social</th>
                <th>Qtd. Caixas</th>
                <th>Data Solicitação</th>
                <th>Desconto</th>
                <th>Forma Pagamento</th>
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
                  <Link type="button">
                    <FiTrash2 size={18} color="#E03737" />
                  </Link>
                </td>
                <td>PCK-01</td>
                <td>112200</td>
                <td>Tiago Pereira Dantas</td>
                <td>20</td>
                <td>16/12/1986</td>
                <td>9.1</td>
                <td>30d | 60d | 90d</td>
              </tr>
              <tr>
                <td className="back-button-edit">
                  <Link type="button">
                    <FiEdit size={18} color="#E03737" />
                  </Link>
                  <Link type="button">
                    <FiEdit2 size={18} color="#E03737" />
                  </Link>
                  <Link type="button">
                    <FiTrash2 size={18} color="#E03737" />
                  </Link>
                </td>
                <td>PCK-02</td>
                <td>112200</td>
                <td>Tiago Pereira Dantas</td>
                <td>20</td>
                <td>16/12/1986</td>
                <td>9.1</td>
                <td>30d | 60d | 90d</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}