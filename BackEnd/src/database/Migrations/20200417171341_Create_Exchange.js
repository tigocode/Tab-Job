
exports.up = function(knex) {
  return knex.schema.createTable('exchange', function (table) {
    table.increments()

    table.string('cod_sap').notNullable()
    table.string('type_paddle').notNullable()
    table.string('model').notNullable()
    table.string('quantity_boxes').notNullable()
    table.string('social_reason').notNullable()
    table.string('Note').notNullable()
    table.string('date_solicitation').defaultTo((new Date()).toLocaleDateString())
    table.string('last_devoluction').notNullable()
    table.string('status').notNullable()
    table.string('cic').notNullable()
    table.string('cic_Note').notNullable()

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('user');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('exchange')
};
