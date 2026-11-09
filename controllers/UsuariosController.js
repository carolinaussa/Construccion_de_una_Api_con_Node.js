let conectar = require("../conexion/bd");

class UsuariosController {
    traer = (req, res) => {
        conectar.query("SELECT * FROM usuarios", (error, resultados) => {
            if (error) {
                return res.json({ "mensaje": "error al traer datos de usuario" });
            } else {
                return res.json(resultados);
            }
        });
    }

    guardar = (req, res) => {
        const { nombre, apellido, direccion, telefono } = req.body;
        conectar.query("INSERT INTO usuarios(nombre,apellido,direccion,telefono) VALUES (?,?,?,?)",
        [nombre, apellido, direccion, telefono], (error) => {
            if (error) {
                return res.json({ "mensaje": "Error: no se registro" });
            } else {
                return res.json({ "mensaje": "usuario registrado" });
            }
        });
    }

    buscar = (req, res) => {
        const { id } = req.params;
        conectar.query("SELECT * FROM usuarios WHERE id = ?", [id], (error, resultados) => {
            if (error) {
                return res.json({ "mensaje": "error al buscar usuario" });
            } else {
                return res.json(resultados);
            }
        });
    }

    actualizar = (req, res) => {
        const { id } = req.params;
        const { nombre, apellido, direccion, telefono } = req.body;
        conectar.query("UPDATE usuarios SET nombre = ?, apellido = ?, direccion = ?, telefono = ? WHERE id = ?",
        [nombre, apellido, direccion, telefono, id], (error) => {
            if (error) {
                return res.json({ "mensaje": "error al actualizar usuario" });
            } else {
                return res.json({ "mensaje": "usuario actualizado" });
            }
        });
    }

    eliminar = (req, res) => {
        const { id } = req.params;
        conectar.query("DELETE FROM usuarios WHERE id = ?", [id], (error) => {
            if (error) {
                return res.json({ "mensaje": "error al eliminar usuario" });
            } else {
                return res.json({ "mensaje": "usuario eliminado" });
            }
        });
    }
}

module.exports = UsuariosController;