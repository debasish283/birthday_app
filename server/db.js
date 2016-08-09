
var db = {
    register: function(parameter) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'manager',
            database: 'guddu'
        });
        var qry = 'insert into users values (' + "'" + parameter.firstname + "'" + ',' + "'" + parameter.lastname + "'" + ',' + "'" + parameter.username + "'" + ',' + "'" + parameter.bday + "'" + ',' + "'" + parameter.gender + "'" + ',' + "'" + parameter.password + "'" + ')';
        console.log(qry);
        connection.connect();
        connection.query(qry, function(err, rows, fields) {
            if (!err)
                console.log('The solution is: ', rows);
            else
                console.log('Error while performing Query.');
        });

        connection.end();
    },
    login: function(parameter, callback) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'manager',
            database: 'guddu'
        });
        var qry = 'select * from users where username = ' + "'" + parameter.username + "'" + " && password = " + "'" + parameter.password + "'";
        console.log(qry);
        connection.connect();
        connection.query(qry, function(err, rows, fields) {
            if (!err > 0) {
                console.log('The solution is: ', rows);
                return callback(rows);
            } else
                console.log('Error while performing Query.');
        });
    }
};

module.exports = db;
