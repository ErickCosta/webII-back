const mongoose = require('mongoose');

const Pessoa = mongoose.Schema({
    nome: {
        type: String,
        required: true
    },

    cpf: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Pessoa", Pessoa);