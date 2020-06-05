
exports.up = function(knex) {
  return knex.schema.createTable('vistalfa', function(table) {
    table.increments()

    table.string('cod_sap').notNullable()
    table.string('numero').notNullable()
    table.string('grupo_rede').notNullable()
    table.string('razao_social').notNullable()
    table.string('nome_fantasia').notNullable()
    table.string('endereço').notNullable()
    table.string('bairro').notNullable()
    table.string('cidade').notNullable()
    table.string('uf').notNullable()
    table.string('cep').notNullable()
    table.string('telefone').notNullable()
    table.string('celular').notNullable()
    table.string('telefone_alternativo').notNullable()
    table.string('email').notNullable()
    table.string('email_alternativo').notNullable()
    table.string('cnpj').notNullable()
    table.string('cpf').notNullable()
    table.string('inscr_estadual').notNullable()
    table.string('crm').notNullable()
    table.string('grupo_cliente').notNullable()
    table.string('descricao_(cd)').notNullable()
    table.string('descricao_(cluster)').notNullable()
    table.string('gp').notNullable()
    table.string('denominação').notNullable()
    table.string('gerencia').notNullable()
    table.string('cod').notNullable()
    table.string('territorio').notNullable()
    table.string('gestor').notNullable()
    table.string('gerente').notNullable()
    table.string('fator_de_conversão_gross_to_nts').notNullable()
    table.string('prazo_de_pagamento').notNullable()
    table.string('forma_de_pagamento').notNullable()
    table.string('data_de_criação').notNullable()
    table.string('faixa').notNullable()
    table.string('responsavel').notNullable()
    table.string('createdAt').defaultTo((new Date()).toLocaleDateString())

    table.string('user_id').notNullable()

    table.foreign('user_id').references('id').inTable('user')
  })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('vistalfa')
};
