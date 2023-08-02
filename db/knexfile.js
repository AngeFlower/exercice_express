const {knexSnakeCaseMappers}=require("objection")
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'gestion',
      user:     'postgres',
      password: '12345'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    ...knexSnakeCaseMappers(),
    seeds:{
      directory:"./seeds"

    }
  },

};
