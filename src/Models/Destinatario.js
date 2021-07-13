const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinatarioSchema = new Schema({

    nombre: String,
    rut: String,
    correo: String,
    cuenta: String,
    tpo_cuenta: String,
    banco: String,
    origen: String,
    telefono: String

});


//crear modelo

const Destinatario = mongoose.model('destinatarios', destinatarioSchema);



module.exports = Destinatario;