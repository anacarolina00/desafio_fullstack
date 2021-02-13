var knex = require('knex')({
    client: 'mysql2',
    connection: {
        host : 'localhost',      //por padrão localhost
        user : 'root',       //por padrão root
        password : '#Senh@19806086',  //sua senha definida
        database : 'desafio_fullstack'     //nome do seu banco criado
    }
})
module.exports = knex




