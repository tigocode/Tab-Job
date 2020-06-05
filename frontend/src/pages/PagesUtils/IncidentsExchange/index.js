import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../../assets/Logo.svg'

export default function IncidentsExchange() {
  const date = new Date().toLocaleDateString()

  return (
    <div className="incidents-exch-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <h1>Nova troca</h1>
        <form action="">
          <div className="input-group-exch">
            <input type="text" value={date} />
            <input type="text" placeholder="Cód. Sap"/>
          </div>
          <div className="input-group-exch-1">
          <input type="text" placeholder="Razão Sócial"/>          
            <input type="text" placeholder="Ultima Troca"/>
            <input type="text" placeholder="Valor da Troca"/>
            <input type="text" placeholder="Nº Novo Pedido"/>
            <input type="text" placeholder="Valor Novo Pedido"/>
          </div>
          <div className="input-group-exch-2">
          <div className="comp-1">
              <label className="container">1 Day Moist Mult
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>
              <label className="container">1 Day Moist
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>
              <label className="container">1 Day Moist Astg
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>              
              <label className="container">1 Day Truey
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>
              <label className="container">Oasys 1 Day
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>
              <label className="container">Oasys
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>
              <label className="container">Oasys Astg
                <input type="radio" name="Modelos" id=""/>
                <span className="checkmark"></span>
              </label>    
            </div>
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}