const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema({


    nombre: String,
    rut: String,
    fec_nacimiento: String,
    correo: String,
    telefono: String,
    pass: String,
    no_cuenta: String,
    saldo: String

});


//crear modelo

const Cliente = mongoose.model('usuarios', clienteSchema);



module.exports = Cliente;



