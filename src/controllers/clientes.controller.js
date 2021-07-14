const Cliente = require("../Models/Cliente");

exports.obtener = ( async (req, res) => {

  let rut= req.params.rut;
  let pass= req.params.pass;

    try {
        const clientes = await Cliente.findOne({ rut: rut, pass: pass }) 
        res.json(clientes);
    } catch (error) {
        res.json(error);
    }
   
  }
)

exports.actualizar = (req, res) => {
    res.json('Sebastian1991')
  }

