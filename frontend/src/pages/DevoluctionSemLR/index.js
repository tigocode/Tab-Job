import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit, FiEdit2, FiTrash2, FiSearch } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function DevoluctionSemLR() {
  const type = 'Sem LR'
  localStorage.setItem('typeSoliction', type)

  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const stringName = userName
  const resultado = stringName.split(" ")
  const nameSeparado = resultado.shift() + ' ' + resultado.slice(-1)[0]

  const [incidentTab, setIncidentTab] = useState([])
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    api.get('profileDevS', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setIncidentTab(response.data)
    })
  }, [userId])

  const filtros = incidentTab.filter((filtro) => {
    if(buscar != '') {
      return filtro.id  == buscar || filtro.cod_sap  == buscar
    }else{
      return filtro
    }
  })

  return (
    <div className="sem-container">
      <header>
        <img src={tabImg} alt="Tab Job" />
        <span>Bem vindo, {nameSeparado}</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <Link className="button" to="/devoluction+incidents">Nova devolução</Link>
          <input 
            type="text" 
            placeholder="Buscar" 
            onChange={e => setBuscar(e.target.value)}
          />
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Cód. Sap</th>
                <th>Perfil do Cliente</th>
                <th>Data Solicitação</th>
                <th>Ultima Solicitação</th>
              </tr>
            </thead>
            <tbody>
              {filtros.map(incident => (
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
                <td>SLR-{incident.id}</td>
                <td>{incident.status}</td>
                <td>{incident.cod_sap}</td>
                <td>{incident.profile_client}</td>
                <td>{incident.date_solicitation}</td>
                <td>{incident.last_devoluction}</td>
              </tr>
              ))}            
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}