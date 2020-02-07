const mysql= require('mysql');
const mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'company'
});

mysqlConnection.connect ((err) =>{
    if(err){
        console.log(err);
        return;
    } else{
        console.log('DB connect')
    }
});

module.exports = mysqlConnection;