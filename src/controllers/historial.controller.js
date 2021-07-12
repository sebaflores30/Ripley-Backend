const Historial = require("../Models/Historial");

exports.obtener = ( async (req, res) => {

  let origen = req.params.origen;
    try {
        const historial = await Historial.find({origen: origen}) 
        console.log(historial);
        res.json(historial);
    } catch (error) {
        res.json(error);
    }
   
  }
)

exports.crear = ( async (req, res) => {

  console.log(req.body);
let transaccion = new Historial();
transaccion.nom_dest = req.body.nom_dest;
transaccion.origen = req.body.origen;
transaccion.banco = req.body.banco;
transaccion.comentario = req.body.comentario;
transaccion.cuenta = req.body.cuenta;
transaccion.fecha = req.body.fecha;
transaccion.monto = req.body.monto;
transaccion.nro_transaccion = req.body.nro_transaccion;
transaccion.rut = req.body.rut;
transaccion.tpo_cuenta = req.body.tpo_cuenta;

transaccion.save(function(err) {
  if (err) return console.error(err);
  res.end();
});
   
  }
)