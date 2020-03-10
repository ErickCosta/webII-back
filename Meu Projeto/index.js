var express = require('express')
var mongoose = require('mongoose')
var requireDir = require('requiredir')
var server = express()
var pessoaController = require('./controllers/PessoaController');

server.use(express.json())

mongoose.connect("mongodb+srv://erick:erick@cluster0-7wp8b.mongodb.net/test?retryWrites=true&w=majority",{})
requireDir('./models')

server.get('/', pessoaController.get);

server.get('/:index', pessoaController.getByIndex);

server.post('/', pessoaController.post);

server.put('/', pessoaController.put);

server.delete('/:index', function (req, res){
    values.splice(req.params.index, 1);
    res.json(values);
})

server.listen(8000)
console.log("Servidor rodando!")