class PruebaController {
    bienvenida(req, res) {
        res.json({ "mensaje": "Bienvenido a la API REST" });
    }

    verificar(req, res) {
        res.json({ "mensaje": "Servidor activo", "estado": true });
    }

    guardar = (req, res) => {
        const { nombre, edad } = req.body;
        res.json({ "mensaje": "datos recibidos " + nombre + " " + edad });
    }

    sumar = (req, res) => {
        const { numero1, numero2 } = req.body;
        const resultado = Number(numero1) + Number(numero2);
        res.json({ "resultado": resultado });
    }
}

module.exports = PruebaController;