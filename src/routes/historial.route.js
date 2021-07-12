const {Router} = require("express");
const ctrHistorial = require("../controllers/historial.controller");
const routerHistorial = Router();
  
routerHistorial.get("/:origen", ctrHistorial.obtener);
routerHistorial.post("/", ctrHistorial.crear);

    module.exports = routerHistorial;