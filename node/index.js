const express = require('express')
const app = express()
const port = 3000
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO modulo(name) values ('Docker'), ('Kubernetes'), ('Arquitetura'), ('Comunicacao'), ('DDD')`
connection.query(sql)

app.get('/', (req, res) => {

    connection.query("SELECT * FROM modulo", function (err, result, fields) {
        if (err) throw err;

        res.send(result);
    });

})

app.listen(3000, () => {
    console.log("Rodando na porta 3000")
})