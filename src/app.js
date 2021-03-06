const express = require("express");
const cors = require('cors');
const morgan = require("morgan");
const conexionDB = require("./db.conexion");
const routerClientes = require("./routes/cliente.route");
const routerDestinatarios = require("./routes/destinatario.route");
const routerHistorial = require("./routes/historial.route");

const app = express();

//conexion a base de datos
conexionDB();

//settings
app.set("name", "rest-api-nodejs");
app.set("port", process.env.PORT || 3000);
app.set("host", process.env.HOST || '0.0.0.0');
//app.set("host", 'http://localhost:');



app.use(express.json());
app.use(cors());

//middelware
app.use(express.json());
app.use(morgan("common"));

//llamado de rutas
app.get("/", (req, res) => {
    res.send("TEST");
});

//get
app.use("/api/clientes", routerClientes);
app.use("/api/destinatarios", routerDestinatarios);
app.use("/api/historial", routerHistorial);

//post

app.use("/api/creaDestinatario", routerDestinatarios)
app.use("/api/guardaTransaccion", routerHistorial)

module.exports = app;