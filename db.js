const {Pool} = require('pg')

const pool = new Pool({
    user: 'postgres',
    database: 'todo_database',
    host: 'localhost',
    password: 'korede',
    port: 5432
})

module.exports = pool