/**
 * Created by daemin Hwnag on 2017-01-10.
 */

var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 100, //important
    host : "db",
    port : 3306,
    user : "root",
    password : "node1234",
    database : "node"
});
module.exports = pool;