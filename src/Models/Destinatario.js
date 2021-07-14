const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinatarioSchema = new Schema({

    nombre: String,
    rut: String,
    correo: String,
    cuenta: {
        type: Number,
        required: true,
        unique: true
    },
    tpo_cuenta: String,
    banco: String,
    origen: Number,
    telefono: String

});


//crear modelo

const Destinatario = mongoose.model('destinatarios', destinatarioSchema);



module.exports = Destinatario;