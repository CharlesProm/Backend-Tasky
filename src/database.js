
// const proConfig = {
//     connectionString: process.env.DATABASE_URL
// }
// const proConfig2 = {
//     connectionString: "postgres://yibanthznkhlhj:29a74f842838dfb4d555654ce4549e2b80374830837d664c6719d8d5862acae5@ec2-52-6-77-239.compute-1.amazonaws.com:5432/dd9o2bt2jre6rm"
// }
// const config = {
//     user: 'postgres',
//     host: 'localhost',
//     password: '123123',
//     database: 'my_first_DB'
// }
const { Pool } = require('pg')
require('dotenv').config()
const config2 = {
    user: 'yibanthznkhlhj',
    host: 'ec2-52-6-77-239.compute-1.amazonaws.com',
    password: "29a74f842838dfb4d555654ce4549e2b80374830837d664c6719d8d5862acae5",
    database: 'dd9o2bt2jre6rm',
    port:'5432',
    ssl: {
    rejectUnauthorized: false,
  },
}

const pool = new Pool(config2)

module.exports = pool
