let ProductosController = require("../controllers/ProductosController");
let express = require("express");

let rutaProductos = express.Router();
const producto = new ProductosController();

rutaProductos.get("/productos", producto.traer);
rutaProductos.post("/productos", producto.guardar);
rutaProductos.get("/productos/agotados", producto.agotados);
rutaProductos.get("/productos/bajo-stock", producto.bajoStock);
rutaProductos.get("/productos/:id", producto.buscar);
rutaProductos.put("/productos/:id", producto.actualizar);
rutaProductos.delete("/productos/:id", producto.eliminar);

module.exports = rutaProductos;