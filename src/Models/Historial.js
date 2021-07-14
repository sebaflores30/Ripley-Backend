const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historialSchema = new Schema({

    nom_dest: String,
    origen: String,
    banco: String,
    comentario: String,
    cuenta: String,
    fecha: String,
    monto: String,
    nro_transaccion: String,
    rut: String,
    tpo_cuenta: String

});


//crear modelo

const Historial = mongoose.model('detalles', historialSchema);



module.exports = Historial;