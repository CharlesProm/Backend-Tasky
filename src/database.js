const { Pool } = require('pg')
require('dotenv').config()
const config = {
    user: 'yibanthznkhlhj',
    host: 'ec2-52-6-77-239.compute-1.amazonaws.com',
    password: "29a74f842838dfb4d555654ce4549e2b80374830837d664c6719d8d5862acae5",
    database: 'dd9o2bt2jre6rm',
    port:'5432',
    ssl: {
    rejectUnauthorized: false,
  },
}
const pool = new Pool(config)

module.exports = pool
