var express = require('express')
var server = express()

server.use(express.json())

var values = [
{"nome": "João", "cpf": 00000000000,}, 
{"nome": "Maria", "cpf": 00000000001,},
{"nome": "Paula", "cpf": 00000000002,}
]

server.get('/', function (req, res){
    console.log("GET values!")
    res.json(values)
})

server.get('/:index', function (req, res){
    var index = req.params.index
    console.log("GET value!")
    console.log(index)
    res.json(values[index])
})

server.post('/', function (req, res){
    console.log("POST add!")
    values.push(req.body)
    res.json(values)
})

server.put('/', function (req, res){
    var novoObj = {"nome": req.body.nome, "cpf": req.body.cpf}
    values[req.body.index] = novoObj
    res.json(values)
})

server.delete('/:index', function (req, res){
    values.splice(req.params.index, 1);
    res.json(values);
})

server.listen(8000)
console.log("Servidor rodando!")