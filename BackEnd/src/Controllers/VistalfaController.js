const connection = require('../database/connection')
const xlsx = require('xlsx')
const path = require('path')

const fs = require('fs')
const { promisify } = require('util')

module.exports = {

  async Index(request, response) {

    const { page = 1 } = request.query

    const [count] = await connection('vistalfa').count()

    const queryVistalfa =  await connection('vistalfa')
    .limit(5)
      .offset((page - 1) * 5)
      .select('vistalfa.*')
    
    response.header('X-Total-Count', count['count(*)'])

    return response.json(queryVistalfa)
  },

  async Import(request, response) {
    const { key } = request.file
    const user_id = request.headers.authorization

    const work =  xlsx.readFile(path.resolve("tmp", "uploads", key ))
    const sheet_name_list = work.SheetNames
    const theEnd = xlsx.utils.sheet_to_json(work.Sheets[sheet_name_list[0]])

    theEnd.map(async function(item, indice) {
      const cod_sap = item.cod_sap
      const numero =  item.numero
      const grupo_rede = item.grupo_rede 
      const razao_social = item.razao_social
      const nome_fantasia = item.nome_fantasia
      const endereco = item.endereco
      const bairro = item.bairro
      const cidade = item.cidade 
      const uf = item.uf 
      const cep = item.cep
      const telefone = item.telefone
      const celular = item.celular 
      const telefone_alternativo = item.telefone_alternativo
      const email = item.email
      const email_alternativo = item.email_alternativo
      const cnpj = item.cnpj
      const cpf = item.cpf 
      const inscr_estadual = item.inscr_estadual
      const crm = item.crm
      const grupo_cliente = item.grupo_cliente 
      const descricao_cd = item.descricao_cd
      const descricao_cluster = item.descricao_cluster
      const gp = item.gp
      const denominacao = item.denominacao
      const gerencia = item.gerencia 
      const cod = item.cod 
      const territorio = item.territorio
      const gestor = item.gestor
      const gerente = item.gerente 
      const fator_de_conversao_gross_to_nts = item.fator_de_conversao_gross_to_nts
      const prazo_de_pagamento = item.prazo_de_pagamento
      const forma_de_pagamento = item.forma_de_pagamento
      const data_de_criacao = item.data_de_criacao
      const faixa = item.faixa
      const responsavel = item.responsavel

      
      const post = await connection('vistalfa').insert({
        cod_sap, numero, grupo_rede, 
        razao_social, nome_fantasia, 
        endereco, bairro, cidade, uf, 
        cep, telefone, celular, 
        telefone_alternativo, email, 
        email_alternativo, cnpj, cpf, 
        inscr_estadual, crm, grupo_cliente, 
        descricao_cd, descricao_cluster, 
        gp, denominacao, gerencia, cod, 
        territorio, gestor, gerente, 
        fator_de_conversao_gross_to_nts, 
        prazo_de_pagamento, forma_de_pagamento, 
        data_de_criacao, faixa, responsavel, user_id
      })

      return response.json(post)
    })

    promisify(fs.unlink)(path.resolve(__dirname, "..", "..", "tmp", "uploads", key ))
  }
}