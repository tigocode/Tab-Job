import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import api from '../../../services/api'

import './styles.css'

import tabImg from '../../../assets/Logo.svg'

export default function IncidentsDevoluction() {
  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const stringName = userName
  const resultado = stringName.split(" ")
  const nameSeparado = resultado.shift() + ' ' + resultado.slice(-1)[0]

  const typeSoliction = localStorage.getItem('typeSoliction')

  const [cod_sap, setCod_sap] = useState('')
  const [type, setType] = useState(typeSoliction)
  const [fim, setFim] = useState('')
  const [fist, setFist] = useState('')
  const [quantity_boxes, setQuantity_boxes] = useState('')
  const [value_devoluction, setValue_devoluction] = useState('')
  const [profile_client, setProfile_client] = useState('')
  const [number_new_request, setNumber_new_request] = useState('')
  const [value_new_request, setValue_new_request] = useState('')
  const [reasons, setReasons] = useState('')
  const [Note, setNote] = useState('')
  const [last_devoluction, setLast_devoluction] = useState('')
  const [radio, setRadio] = useState('')
  const difference_value = value_devoluction - value_new_request
  const date_solicitation = new Date().toLocaleString()

  const history = useHistory()
  

    const listModelos = [
      {id: 1, name: 'Acuvue 2'},
      {id: 2, name: '1 Day Moist Mult'},
      {id: 3, name: '1 Day Moist'},
      {id: 4, name: '1 Day Moist Astg'},      
      {id: 5, name: 'Oasys 1 Day'},
      {id: 6, name: 'Oasys'},
      {id: 7, name: 'Oasys Astg'},
      {id: 8, name: 'Oasys com Trans'},
    ]

    const listMotivos = [
      {id: 1, name: 'Troca de Produto'},
      {id: 2, name: 'Troca de Dioptria'},
      {id: 3, name: 'Próximo do Vencimento'},
      {id: 4, name: 'Erro de Digitação'},      
      {id: 5, name: 'Desistência do Cliente Final'},
      {id: 6, name: 'Cliente Afirma que Não Fez Pedido'},   
    ] 
    
    async function handleNewIncidentDevoluction(e) {
      e.preventDefault()

      const data ={
        cod_sap,
        type,
        model,
        quantity_boxes,
        value_devoluction,
        profile_client,
        number_new_request,
        value_new_request,
        difference_value,
        reason,
        Note,
        last_devoluction,
      }

      try {
        await api.post('devoluction', data, {
          headers: {
            Authorization: userId,
          }
        })
          if(typeSoliction === 'Com LR') {            
            history.push('/devoluction+com+lr')
          }else{
            history.push('/devoluction+sem+lr')
          }
      } catch (error) {
        alert('Erro ao cadastrar devolução, tente novamente.')
      }
    }

    function clickReason() {
      setFist(prevReason => prevReason + reasons + ' ')
    }
    const reason = [fist] +[reasons]

    function clickModel() {
      setFim(prevModel => prevModel + radio + ' ')
      const increment = prompt('Informe a Qtd. de Caixas:', '')      
      if (model != null) {
        setQuantity_boxes(prevIcrem => prevIcrem + ' ' + increment)
      }  
    }
    const model = [fim] + [radio]
    
  return (
    <div className="incidents-dev-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, {nameSeparado}</span>
        <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <h1>Nova solicitção</h1>
        <form onSubmit={handleNewIncidentDevoluction}>
          <div className="input-group-1">
            <input 
              type="text" 
              value={date_solicitation}
            /> 
            <input
              type="text"
              placeholder="Cód. Sap"
              value={cod_sap}
              onChange={e => setCod_sap(e.target.value)}
            />
          </div>
          <div className="input-group">                      
            <input
              type="text"
              placeholder="Perfil"
              value={profile_client}
              onChange={e => setProfile_client(e.target.value)}
            />          
            <input
              type="text"
              placeholder="Ultima Devolução"
              value={last_devoluction}
              onChange={e => setLast_devoluction(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor da Devolução"
              value={value_devoluction}
              onChange={e => setValue_devoluction(e.target.value)}
            />
            <input
              type="text"
              placeholder="Nº Novo Pedido"
              value={number_new_request}
              onChange={e => setNumber_new_request(e.target.value)}
            />
            <input
              type="text"
              placeholder="Valor Novo Pedido"
              value={value_new_request}
              onChange={e => setValue_new_request(e.target.value)}
            />
          </div>
          <div className="input-group-2">
            <div className="comp">
              {listMotivos.map((item, index) => (
                <label 
                  className="container"
                  value={fist}
                  onChange={e => setReasons(e.target.value, fist)}
                >{item.name}
                  <input
                    type="radio"
                    name={item.name}
                    key={index}
                    value={item.name}
                    onClick={clickReason}
                  />
                  <span className="checkmark"></span>
                </label>
              ))}
            </div>
            <div className="comp-1">
              {listModelos.map((item, index) => (
                <label 
                  className="container"
                  value={fim}
                  onChange={e => setRadio(e.target.value, fim)}
                >{item.name}
                  <input
                    type="radio" 
                    name={item.name} 
                    key={index}
                    value={item.name}
                    onClick={clickModel}
                  />
                  <span className="checkmark"></span>                  
                </label>                           
              ))}
            </div>
          </div>
          <div className="input-group">
            <textarea
              placeholder="Observação"
              value={Note}
              onChange={e => setNote(e.target.value)}
            />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}