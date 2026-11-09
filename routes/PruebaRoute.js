let express = require("express");
let PruebaController = require("../controllers/PruebaController");

let router = express.Router();
let controllerp = new PruebaController();

router.get("/bienvenida", controllerp.bienvenida);
router.get("/verificar", controllerp.verificar);
router.post("/recibir", controllerp.guardar.bind(controllerp));
router.post("/sumar", controllerp.sumar.bind(controllerp));

module.exports = router;