const mongoose = require('mongoose');

const user = 'Ripley';
const password = 'hola1234';
const dbname = 'Ripley';
const uri = `mongodb+srv://${user}:${password}@cluster0.3mlvm.mongodb.net/${dbname}?ertryWrites=true&w=majority`;

const conexionDB = async ()=> {

    try {
    const DB = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
console.log("Conexion exitosa a:", DB.connection.name)
        const db = mongoose.connection;
        

    } catch (error) {
        console.log(error);

    }

};

module.exports = conexionDB;