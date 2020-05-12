import React from 'react'
import { Link } from 'react-router-dom'
import { FiLogOut, FiEdit2, FiTrash2 } from 'react-icons/fi'

import './styles.css'

import tabImg from '../../assets/Logo.svg'

export default function DevoluctionComLR() {
  return (
    <div className="com-container">
      <header>
        <img src={tabImg} alt="Tab Job"/>
        <span>Bem vindo, Tiago Dantas</span>
          <Link className="button-logout" to="/profile">
          <FiLogOut size={18} color="#E03737" />
        </Link>
      </header>
      <div className="content">
        <form>
          <Link className="button">Nova devolução</Link>
          <input type="text" placeholder="Buscar" />
          <table>
            <thead>
              <tr>
                <th>Ações</th>
                <th>Tipo</th>
                <th>Status</th>
                <th>Cód. Sap</th>
                <th>Perfil do Cliente</th>
                <th>Razão Social</th>
                <th>Observação</th>
                <th>Data Solicitacao</th>
                <th>Ultima Solicitacao</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-01</td>
                <td>Aberto</td>
                <td>11808</td>
                <td>ADPTDO</td>
                <td>Tiago Dantas dadasdfds dadasfasdf dadasfasdf</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
              <tr>
                <td>
                <FiEdit2 size={18} color="#E03737" />
                <FiTrash2 size={18} color="#E03737" />
                </td>
                <td>DCL-03</td>
                <td>Pendente</td>
                <td>115408</td>
                <td>NAO ADPTDO</td>
                <td>Tiago Dantas</td>
                <td>fadsfasdfasdf</td>
                <td>16/1/1986</td>
                <td>16/12/1986</td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    </div>
  )
}