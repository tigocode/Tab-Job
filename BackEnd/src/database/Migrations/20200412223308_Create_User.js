
exports.up = function(knex) {
  return knex.schema.createTable('user', function (table){
    table.string('id').primary()
    table.string('name').notNullable()
    table.string('email').notNullable()
    table.string('avatar').notNullable()
    table.string('password_hash').notNullable()
    table.string('cpf', 12).notNullable()
    table.string('contact').notNullable()
    table.string('cell_phone').notNullable()
    table.string('provider').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('user')
};
