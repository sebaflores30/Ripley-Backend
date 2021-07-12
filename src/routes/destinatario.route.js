const {Router} = require("express");
const ctrDestinatario = require("../controllers/destinatario.controller");
const routerDestinatario = Router();
  
  routerDestinatario.get("/:origen", ctrDestinatario.obtener);
  routerDestinatario.post("/", ctrDestinatario.crear);
  

    module.exports = routerDestinatario;