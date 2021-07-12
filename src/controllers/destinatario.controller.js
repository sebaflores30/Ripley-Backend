const Destinatario = require("../Models/Destinatario");

exports.obtener = ( async (req, res) => {

  let origen = req.params.origen;
    try {
        const destinatario = await Destinatario.find({origen: origen}) 
        res.json(destinatario);
    } catch (error) {
        res.json(error);
    }
   
  }
)

exports.crear = ( async (req, res) => {

console.log(req.body);
let destinatario = new Destinatario();
destinatario.nombre = req.body.nombre;
destinatario.rut = req.body.rut;
destinatario.correo = req.body.correo;
destinatario.cuenta = req.body.cuenta;
destinatario.tpo_cuenta = req.body.tpo_cuenta;
destinatario.banco = req.body.banco;
destinatario.origen = req.body.origen;

destinatario.save(function(err) {
  if (err) return console.error(err);
  res.end();
});
   
  }
)
