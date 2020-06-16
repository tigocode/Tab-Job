import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit, FiEdit2, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function PackageFacil() {
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const stringName = userName
  const resultado = stringName.split(" ")
  const nameSeparado = resultado.shift() + ' ' + resultado.slice(-1)[0]

  const [incidentTab, setIncidentTab] = useState([])
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    api.get('profilePackage', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setIncidentTab(response.data)
    })
  }, [userId])

  const filtros = incidentTab.filter((filtro) => {
    
    if (buscar != '') {
      return filtro.id  == buscar || filtro.cod_sap == buscar || filtro.social_reason == buscar
    }else{
      return filtro
    }  
      
  })

  return (
    <div className="package-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, {nameSeparado}</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <Link className="button" to="/package+incidents">Novo pacote</Link>
          <input 
            type="text" 
            placeholder="Buscar" 
            onChange={e => setBuscar(e.target.value)}
          />
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
              {filtros.map(incident => (
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
                <td>PCK-{incident.id}</td>
                <td>{incident.cod_sap}</td>
                <td>{incident.social_reason}</td>
                <td>{incident.quantity_boxes}</td>
                <td>{incident.date}</td>
                <td>{incident.discount}</td>
                <td>{incident.Form_of_payment}</td>
              </tr>
              ))}                            
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}