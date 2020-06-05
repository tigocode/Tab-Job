import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../../assets/Logo.svg'

export default function IncidentsDevoluction() {
  const date = new Date().toLocaleDateString()
  const [modelo, setModelo] = useState(1)

    const listModelos = [
      {id: 1, name: "Acuvue 2"},
      {id: 2, name: "1 Day Moist Mult"},
      {id: 3, name: "1 Day Moist"},
      {id: 4, name: "1 Day Moist Astg"},      
      {id: 5, name: "Oasys 1 Day"},
      {id: 6, name: "Oasys"},
      {id: 7, name: "Oasys Astg"},
      {id: 8, name: "Oasys com Trans"},
    ]

    const listMotivos = [
      {id: 1, name: "Troca de Produto"},
      {id: 2, name: "Troca de Dioptria"},
      {id: 3, name: "Próximo do Vencimento"},
      {id: 4, name: "Erro de Digitação"},      
      {id: 5, name: "Desistência do Cliente Final"},
      {id: 6, name: "Cliente Afirma que Não Fez Pedido"},      
    ]


  return (
    <div className="incidents-dev-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <h1>Nova solicitção</h1>
        <form>
          <div className="input-group-1">
            <input type="text" value={date} /> 
            <input type="text" placeholder="Cód. Sap"/>
          </div>
          <div className="input-group">                      
            <input type="text" placeholder="Perfil"/>          
            <input type="text" placeholder="Ultima Devolução"/>
            <input type="text" placeholder="Valor da Devolução"/>
            <input type="text" placeholder="Nº Novo Pedido"/>
            <input type="text" placeholder="Valor Novo Pedido"/>
          </div>
          <div className="input-group-2">
            <div className="comp">
              {listMotivos.map((item, index) => (
                <label className="container">{item.name}
                  <input
                    type="radio"
                    name={item.name}
                    key={index}
                    value={item.name}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <div className="comp-1">
              {listModelos.map((item, index) => (
                <label className="container">{item.name}
                  <input
                    type="radio" 
                    name={item.name} 
                    key={index} 
                    value={item.name} 
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
          </div>                  
          <div className="input-group">
            <textarea placeholder="Observação"/>
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}