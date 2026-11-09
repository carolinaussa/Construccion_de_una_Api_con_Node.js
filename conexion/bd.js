let mysql = require("mysql2");

let conectar = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "senaCTPI",
    database: "taller_api",
    port: 3306
});

conectar.connect((error) => {
    if (error) {
        console.log("error conexion base de datos");
    } else {
        console.log("conexion realizada");
    }
});

module.exports = conectar;