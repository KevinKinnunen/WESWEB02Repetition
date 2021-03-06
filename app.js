const express = require('express')
const app = express()
const port = 3000
const databaseModule = require('./databaseModule');
const thingModel = require('./thingModel');

app.use(express.static(__dirname + '\\staticFiles\\'))
app.use(express.json())
app.use(express.urlencoded())

app.post('/test', function (req, res) {

    console.log(req.body.kanelbulle);

    res.sendStatus(418)
})

app.listen(port, () => console.log(`Example app listening on port port!`))