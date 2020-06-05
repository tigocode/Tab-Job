import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [cpf, setCpf] = useState('')
  const [contact, setContact] = useState('')
  const [cell_phone, setCell_phone] = useState('')
  

  const history = useHistory()

  async function handleRegister(e) {
    e.preventDefault()

    const data = {
      name,
      email,
      password,
      cpf,
      contact,
      cell_phone,
    }    

    try {
      const response = await api.post('user', data)

      alert(`Seu ID de Acesso: ${response.data.id}`)

      history.push('/')
    } catch (error) {
      alert('Erro no cadastro, tente novamente')
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={tabImg} alt="Tab Job" />

          <h1>Cadastro</h1>
          <p>Faça seu cadastro para ultilizar os benéficos da plataforma TAB JOB.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#E03737" />
            Voltar
          </Link>
        </section>
        <form onSubmit={handleRegister}>
            <input 
              placeholder="Nome"
              value={name}
              onChange={e => setName(e.target.value)} />
            <input 
              type="email" 
              placeholder="E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)} />            

          <div className="input-group">
            <input 
              placeholder="CPF"
              value={cpf}
              onChange={e => setCpf(e.target.value)} />          
            <input 
              placeholder="Telefone" 
              value={contact}
              onChange={e => setContact(e.target.value)}/>
          </div>
          
          <div className="input-group">
            <input 
              placeholder="Celular"
              value={cell_phone}
              onChange={e => setCell_phone(e.target.value)} />
            <input 
              type="password" 
              placeholder="Senha"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}


