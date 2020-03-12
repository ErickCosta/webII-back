var pessoa = require('../models/Pessoa')

class PessoaController{

    async get (req, res){
        return res.json( await pessoa.find());
    }

    async getByIndex(req, res){
        var {index} = req.params
        return res.json( await pessoa.findById(index));
    }

    async post(req, res){
        return res.json(await pessoa.create(req.body));
    }

    async put(req, res){
        var {index, nome, cpf} = req.body
        return res.json(await pessoa.findByIdAndUpdate(index, {nome: nome, cpf: cpf}))
    }

    async delete(req, res){
        var {index} = req.params
        return res.json(await pessoa.findByIdAndRemove(index))
    }
}

module.exports = new PessoaController(); 