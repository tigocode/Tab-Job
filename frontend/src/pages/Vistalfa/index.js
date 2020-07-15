import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit2, FiSearch } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function Vistalfa() {
  const type = 'Vistalfa'
  localStorage.setItem('typeSoliction', type)

  const userId = localStorage.getItem('userId')
  const userName = localStorage.getItem('userName')

  const stringName = userName
  const resultado = stringName.split(" ")
  const nameSeparado = resultado.shift() + ' ' + resultado.slice(-1)[0]

  const [vistalfa, setVistalfa] = useState([])
  const [buscar, setBuscar] = useState('')

  useEffect(() => {
    api.get('vistalfaImport', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setVistalfa(response.data)
    })
  }, [userId])

  const filtros = vistalfa.filter((filtro) => {
    if(buscar != '') {
      return filtro.descricao_cluster  == buscar || filtro.cod_sap  == buscar || filtro.name  == buscar || filtro.razao_social == buscar
    }else{
      return filtro
    }
  })
  return (
    <div className="vistalfa-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, {nameSeparado}</span>
        <Link className="button-logout" onSubmit="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <input 
            type="text" 
            placeholder="Buscar" 
            onChange={e => setBuscar(e.target.value)}
          />
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
              {filtros.map(vistalfa => (
                <tr key={vistalfa.id}>
                  <td className="back-button-edit">
                    <button type="button"to="/tab+job+incidents" >
                      <FiEdit2 size={18} color="#E03737" />
                    </button>
                    <Link type="button">
                     <FiSearch size={18} color="#E03737" />
                    </Link>
                  </td>
                  <td>{vistalfa.cod_sap}</td>
                  <td>{vistalfa.razao_social}</td>
                  <td>{vistalfa.name}</td>
                  <td>{vistalfa.descricao_cluster}</td>
                  <td>{vistalfa.gerencia}</td>
              </tr>
              ))}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}