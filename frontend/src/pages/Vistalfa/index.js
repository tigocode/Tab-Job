import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit2, FiSearch } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function Vistalfa() {
  return (
    <div className="vistalfa-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <input type="text" placeholder="Buscar" />
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Sap</th>
                <th>Razão Sócial</th>
                <th>Gestor</th>
                <th>Descrição</th>
                <th>Gerência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="back-button-edit">
                  <Link type="button"to="/tab+job+incidents" >
                    <FiEdit2 size={18} color="#E03737" />
                  </Link>
                  <Link type="button">
                   <FiSearch size={18} color="#E03737" />
                  </Link>
                </td>
                <td>112025</td>
                <td>Tiago Pereira Dantas</td>
                <td>Tiago Pereira Dantas</td>
                <td>Otica</td>
                <td>Canal Indireto</td>
              </tr>
              <tr>
                <td className="back-button-edit">
                  <Link type="button">
                    <FiEdit2 size={18} color="#E03737" />
                  </Link>
                  <Link type="button">
                   <FiSearch size={18} color="#E03737" />
                  </Link>
                </td>
                <td>112025</td>
                <td>Tiago Pereira Dantas</td>
                <td>Tiago Pereira Dantas</td>
                <td>Otica</td>
                <td>Canal Indireto</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}