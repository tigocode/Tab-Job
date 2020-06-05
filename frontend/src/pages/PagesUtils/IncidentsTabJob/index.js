import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import api from '../../../services/api'

import './styles.css'

import tabImg from '../../../assets/Logo.svg'

export default function IncidentsTabJob() {
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const [sap, setSap] = useState('')
  const [status, setStatus] = useState(1)
  const [n_pedido, setN_pedido] = useState('')
  const [qtd_caixas, setQtd_caixas] = useState('')
  const [valor, setValor] = useState('')
  const date = new Date().toLocaleDateString()

  const history = useHistory()

  const listStatus = [
    {id: 1, name: "Status do Pedido"},
    {id: 2, name: "Pendente"},
    {id: 3, name: "Concluido"},
  ]
  
  async function handleNewIncidentTab(e) {
    e.preventDefault()

    const data = {
      status,
      sap,
      n_pedido,
      qtd_caixas,
      valor,
      userId,
    }
    
    try {
      await api.post('tabjob', data, {
        headers: {
          Authorization: userId,
        }
      })

      history.push('/tab+job')
    } catch (error) {
      alert('Erro ao cadastrar pedido, tente novamente.')
    }
  }

  return (
    <div className="incidents-tab-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/tab+job">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <h1>Novo pedido</h1>
        <form onSubmit={handleNewIncidentTab}>
          <div className="input-group-tab">
            <input type="text" value={date} /> 
            <input type="text" 
              placeholder="Cód. Sap"
              value={sap}
              onChange={e => setSap(e.target.value)}
            />
          </div>
          <div className="input-group-tab-1">         
            <input type="text" 
              placeholder="Responsável"
              value={userName}
              onChange={e => setSap(e.target.value)}
            />
            <input type="text" 
              placeholder="Nº do Pedido"
              value={n_pedido}
              onChange={e => setN_pedido(e.target.value)}
            />
            <input type="text" 
              placeholder="Qtd. de Caixas"
              value={qtd_caixas}
              onChange={e => setQtd_caixas(e.target.value)}
            />
            <input type="text" 
              placeholder="Valor do Pedido"
              value={valor}
              onChange={e => setValor(e.target.value)}
            />
            <select 
              value={status}
              onChange={e => setStatus(e.target.value)}>
              {
                listStatus.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))                  
              }              
            </select>
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}