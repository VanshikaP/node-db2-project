
exports.up = function(knex) {
    return knex.schema.createTable('sales', tbl => {
        tbl.increments();
        tbl.integer('VIN').unique().notNullable();
        tbl.text('make', 128).notNullable();
        tbl.text('model', 128).notNullable();
        tbl.decimal('mileage');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('sales');
};
