let express = require("express");
let cors = require("cors");
let mysql = require("mysql2");
let router = require("./routes/PruebaRoute");
let rutaUsuarios = require("./routes/UsuariosRoute");
let rutaProductos = require("./routes/ProductosRoute");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use("/api", router);
app.use("/apiUser", rutaUsuarios);
app.use("/apiProduct", rutaProductos);

app.listen(PORT, () => {
    console.log("servidor en ejecucion " + PORT);
});