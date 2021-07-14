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
  try {
    const transacciondata = await Historial.create(req.body);
    res.status(200).json({
      status: 200,
      data: transacciondata

    })

  } catch (error) {
    res.status(400).json({
      status: 400,
      mensage: error
    })

  }
   
  }
)