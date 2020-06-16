import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiLogIn, FiLock } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import tabImg from '../../assets/TabJob.png'

export default function Login() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()

    try {
      const response = await api.post('session', {id, password})

      localStorage.setItem('userId', id)
      localStorage.setItem('userName', response.data.name)
      localStorage.setItem('userEmail', response.data.email)
      localStorage.setItem('userProvider', response.data.provider)

      history.push('/profile')
    } catch (error) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="login-container">
      <img src={tabImg} alt="Tab Job" />
      <hr />
      <section className="form">
        <form onSubmit={handleLogin}>
          <h1>Faça seu login</h1>

          <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
           />
          <input 
            type="password" 
            placeholder="Sua Senha" 
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Acessar</button>
          <div>
          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#E03737" />
            Faça seu cadastro
          </Link>
          <Link className="back-link" to="/resetpass">
            <FiLock size={16} color="#E03737" />
            Esqueceu a senha?
          </Link>
          </div>
        </form>
      </section>
    </div>
  )
}