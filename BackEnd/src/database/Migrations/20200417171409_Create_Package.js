
exports.up = function(knex) {
  return knex.schema.createTable('package', function (table) {
    table.increments()

    table.string('cod_sap').notNullable()
    table.string('social_reason').notNullable()
    table.string('model').notNullable()
    table.string('quantity_boxes').notNullable()    
    table.timestamp('date').defaultTo(knex.fn.now())
    table.string('discount').notNullable()
    table.string('Form_of_payment').notNullable()

    table.string('user_id').notNullable();

    table.foreign('user_id').references('id').inTable('user');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('package')
};





