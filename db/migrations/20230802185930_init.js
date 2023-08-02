
exports.up = function(knex) {
    return knex.schema
    .createTable('cours',t=>{
        t.increments('id');
        t.string('nom').notNullable();
        t.timestamp(true,true)
    })
  
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('cours')
  
};
