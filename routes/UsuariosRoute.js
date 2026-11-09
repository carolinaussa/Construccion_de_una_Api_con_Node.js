let UsuariosController = require("../controllers/UsuariosController");
let express = require("express");

let rutaUsuarios = express.Router();
const usuario = new UsuariosController();

rutaUsuarios.get("/usuarios", usuario.traer);
rutaUsuarios.post("/usuarios", usuario.guardar);
rutaUsuarios.get("/usuarios/:id", usuario.buscar);
rutaUsuarios.put("/usuarios/:id", usuario.actualizar);
rutaUsuarios.delete("/usuarios/:id", usuario.eliminar);

module.exports = rutaUsuarios;