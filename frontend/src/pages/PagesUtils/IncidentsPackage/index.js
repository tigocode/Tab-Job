import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import api from '../../../services/api'

import './styles.css'

import tabImg from '../../../assets/Logo.svg'

export default function IncidentsPackage() {
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const [cod_sap, setCod_sap] = useState('')
  const [social_reason, setSocial_reason] = useState('')
  const [model, setModel] = useState('')
  const [quantity_boxes, setQuantity_boxes] = useState('')
  const [discount, setDiscount] = useState('')
  const [Form_of_payment, setForm_of_payment] = useState('')
  const date = new Date().toLocaleDateString()

  const history = useHistory()

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

  async function handleNewIncidentPackage(e) {
    e.preventDefault()

    const data = {
      cod_sap,
      social_reason,
      model,
      quantity_boxes,
      discount,
      Form_of_payment,
    }
    console.log(data)
    try {
      await api.post('package', data, {
        headers: {
          Authorization: userId,
        }
      })

      history.push('/package+facil')
    } catch (error) {
      alert('Erro ao cadastrar pedido, tente novamente.')
    }
  }

  return (
    <div className="incidents-pack-container">
      <header>      
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, {userName}</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <h1>Novo pacote acuvue</h1>
        <form onSubmit={handleNewIncidentPackage}>
          <div className="input-group-pack">
            <input 
              type="text"
              value={date} />
            <input 
              type="text"
              placeholder="Cód. Sap" 
              value={cod_sap}
              onChange={e => setCod_sap(e.target.value)}
            />
          </div>
          <div className="input-group-pack-1">
            <input 
              type="text"
              placeholder="Razão Sócial" 
              value={social_reason}
              onChange={e => setSocial_reason(e.target.value)}
            />
            <input 
              type="text"
              placeholder="Qtd. de Caixas" 
              value={quantity_boxes}
              onChange={e => setQuantity_boxes(e.target.value)}
            />
            <input 
              type="text"
              placeholder="Desconto" 
              value={discount}
              onChange={e => setDiscount(e.target.value)}
            />
            <input 
              type="text"
              placeholder="Frm. de Pagamento" 
              value={Form_of_payment}
              onChange={e => setForm_of_payment(e.target.value)}
            />
          </div>
          <div className="input-group-pack-2">
          <div className="comp-1">
            {
            listModelos.map((item, index) => (
            <label 
              className="container"
              value={model}
              onChange={e => setModel(e.target.value)}  
            >{item.name}
              <input 
                type="radio" 
                name="Modelos"
                key={index} 
                value={item.name}
                onChange={e => setModel(e.target.value)}
              />
              <span className="checkmark"></span>
            </label>
            ))}               
            </div>
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}