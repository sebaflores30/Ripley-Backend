
const {Router} = require("express");
const ctrCliente = require("../controllers/clientes.controller");
const routerClientes = Router();
  
  routerClientes.get("/:rut/:pass", ctrCliente.obtener);
  routerClientes.put("/", ctrCliente.actualizar);

    module.exports = routerClientes;