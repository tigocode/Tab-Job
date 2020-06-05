
exports.up = function(knex) {
  return knex.schema.createTable('tab_Job', function(table) {
    table.increments()
    
    table.string('status').notNullable()
    table.string('sap').notNullable()
    table.string('data').defaultTo((new Date()).toLocaleDateString())
    table.string('n_pedido').notNullable()
    table.string('qtd_caixas').notNullable()
    table.string('valor').notNullable()

    table.string('user_id').notNullable()

    table.foreign('user_id').references('id').inTable('user')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('tab_job')
};
