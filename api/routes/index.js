const { Router } = require("express");
require("dotenv").config();

// Importar todos los routers;
const priceRoutes = require('./priceRoutes')

const router = Router();

router.use("/prices", priceRoutes);

router.get('/', (req, res) => { 
   res.send('Bienvenido a mi API =)')
})

module.exports = router;