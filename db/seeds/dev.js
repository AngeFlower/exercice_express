exports.seed = async function(knex){
  await knex.raw('TRUNCATE TABLE "cours" CASCADE');

  await knex('cours').insert([
    {id:1, nom:"Maths"},
    {id:2, nom:"Kirundi"},
  ]);
};