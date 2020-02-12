var express = require('express')
var server = express()
var pessoaController = require('./controllers/PessoaController');

server.use(express.json())

var values = [
{"nome": "João", "cpf": 00000000000,}, 
{"nome": "Maria", "cpf": 00000000001,},
{"nome": "Paula", "cpf": 00000000002,}
]

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