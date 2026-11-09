let conectar = require("../conexion/bd");

class ProductosController {
    traer = (req, res) => {
        conectar.query("SELECT * FROM productos", (error, resultados) => {
            if (error) {
                return res.json({ "mensaje": "error al traer productos" });
            } else {
                return res.json(resultados);
            }
        });
    }

    guardar = (req, res) => {
        const { nombre, descripcion, precio, stock } = req.body;
        conectar.query("INSERT INTO productos(nombre,descripcion,precio,stock) VALUES (?,?,?,?)",
        [nombre, descripcion, precio, stock], (error) => {
            if (error) {
                return res.json({ "mensaje": "Error: no se registro producto" });
            } else {
                return res.json({ "mensaje": "producto registrado" });
            }
        });
    }

    buscar = (req, res) => {
        const { id } = req.params;
        conectar.query("SELECT * FROM productos WHERE id = ?", [id], (error, resultados) => {
            if (error) {
                return res.json({ "mensaje": "error al buscar producto" });
            } else {
                return res.json(resultados);
            }
        });
    }

    actualizar = (req, res) => {
        const { id } = req.params;
        const { nombre, descripcion, precio, stock } = req.body;
        conectar.query("UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ? WHERE id = ?",
        [nombre, descripcion, precio, stock, id], (error) => {
            if (error) {
                return res.json({ "mensaje": "error al actualizar producto" });
            } else {
                return res.json({ "mensaje": "producto actualizado" });
            }
        });
    }

    eliminar = (req, res) => {
        const { id } = req.params;
        conectar.query("DELETE FROM productos WHERE id = ?", [id], (error) => {
            if (error) {
                return res.json({ "mensaje": "error al eliminar producto" });
            } else {
                return res.json({ "mensaje": "producto eliminado" });
            }
        });
    }

    agotados = (req, res) => {
        conectar.query("SELECT * FROM productos WHERE stock = 0", (error, resultados) => {
            if (error) {
                return res.json({ "mensaje": "error al consultar agotados" });
            } else {
                return res.json(resultados);
            }
        });
    }

    bajoStock = (req, res) => {
        conectar.query("SELECT * FROM productos WHERE stock < 5", (error, resultados) => {
            if (error) {
                return res.json({ "mensaje": "error al consultar bajo stock" });
            } else {
                return res.json(resultados);
            }
        });
    }
}

module.exports = ProductosController;