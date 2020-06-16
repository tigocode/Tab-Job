
exports.up = function(knex) {
  return knex.schema.createTable('devoluction', function (table) {
    table.increments()

    table.string('cod_sap').notNullable()
    table.string('type').notNullable()
    table.string('model').notNullable()
    table.string('quantity_boxes').notNullable()
    table.string('value_devoluction').notNullable()
    table.string('profile_client').notNullable()
    table.string('number_new_request').notNullable()
    table.string('value_new_request').notNullable()
    table.string('difference_value').notNullable()
    table.string('reason').notNullable()
    table.string('Note').notNullable()
    table.timestamp('date_solicitation').defaultTo(knex.fn.now())
    table.string('last_devoluction').notNullable()
    table.string('status').defaultTo('')
    table.string('type_paddle').defaultTo('')
    table.string('cic').defaultTo('')
    table.string('cic_Note').defaultTo('')

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('user');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('devoluction')
};
