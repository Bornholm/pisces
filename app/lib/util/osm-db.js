module.exports = require('knex')({
  client: 'pg',
  connection: {
    host     : 'postgis',
    user     : 'www-data',
    password : 'www-data',
    database : 'gis'
  }
});
