var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: '2009'
});




connection.connect();




let sql = "select * from user"
// console.log(sql);
connection.query(sql, function(error, results, fields) {
    console.log(error)
    console.log(results)
});




connection.end();