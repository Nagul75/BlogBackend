const { Pool } = require('pg');

module.exports = new Pool({
  user: 'regal',
  host: 'localhost',
  database: 'blog',
  password: process.env.POSTGRES_PASSWORD,
  port: 5432,
});


