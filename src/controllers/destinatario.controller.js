const Destinatario = require("../Models/Destinatario");

exports.obtener = (async (req, res) => {

  let origen = req.params.origen;
  try {
    const destinatario = await Destinatario.find({ origen: origen })
    res.json(destinatario);
  } catch (error) {
    res.json(error);
  }

}
)

exports.crear = (async (req, res) => {
  try {
    const destinatariodata = await Destinatario.create(req.body);
    res.status(200).json({
      status: 200,
      data: destinatariodata

    })

  } catch (error) {
    res.status(400).json({
      status: 400,
      mensage: error
    })

  }

});


