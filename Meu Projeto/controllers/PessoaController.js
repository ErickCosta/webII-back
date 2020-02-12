

var values = [
    {"nome": "João", "cpf": 00000000000,}, 
    {"nome": "Lucas", "cpf": 00000000001,},
    {"nome": "Paula", "cpf": 00000000002,}
    ];

class PessoaController{

    get (req, res){
        return res.json(values);
    }

    getByIndex(req, res){
        var index = req.params.index;
        return res.json(values[index]);
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