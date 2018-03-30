const express = require('express');
const mysql = require('mysql');
const app = express();

// Create Connection

const dbConnection = mysql.createConnection({
    host     : 'localhost',
    user     : 'judy_local',
    password : '',
    port:8889,
    database : 'green_home'
})

//Connect to Database

dbConnection.connect((err) => {
    if(err) {
        throw err;
    }
    console.log('MySql Connected');
})


// Create table

app.get('/questions', (req, res) => {
    let sql = 'SELECT * FROM questions';
    dbConnection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});



app.listen('3000', () => {
    console.log('Server started on port 3000');
});





/*
// Create table

app.get('/selectedchoices', (req, res) => {
    let sql = 'CREATE TABLE selected_choice(id int AUTO_INCREMENT, choice VARCHAR(255), PRIMARY KEY(id))';
    dbConnection.query(sql, (err, result) => {
        if(err) throw err;
        console.log(result);
        res.send('selected_choices created ...');
    });
});

*/