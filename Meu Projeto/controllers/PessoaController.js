var pessoa = require('../models/Pessoa')

class PessoaController{

    async get (req, res){
        return res.json( await pessoa.find());
    }

    async getByIndex(req, res){
        var {index} = req.params
        return res.json( await pessoa.findById(index));
    }

    post(req, res){
        values.push(req.body);
        return res.json(values);
    }

    put(req, res){
        var novoObj = {"nome": req.body.nome, "cpf": req.body.cpf}
        values[req.body.index] = novoObj
        return res.json(values)
    }
}

module.exports = new PessoaController(); 