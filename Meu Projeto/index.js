var express = require('express')
var mongoose = require('mongoose')
var requireDir = require('requiredir')
var server = express()
var pessoaController = require('./controllers/PessoaController');

server.use(express.json())

mongoose.connect("mongodb://localhost:27017/mongodb",{})
requireDir('./models')

server.get('/', pessoaController.get);

server.get('/:index', pessoaController.getByIndex);

server.post('/', pessoaController.post);

server.put('/', pessoaController.put);

server.delete('/:index', pessoaController.delete);

server.listen(8000)
console.log("Servidor rodando!")