// routes/priceRoutes.js
const { Router } = require('express');
const  PriceController  = require('../controllers/PriceController');
const router = Router();

router.get('/', PriceController.getAllPrices);
router.post('/', PriceController.createPrice);
router.put('/:id', PriceController.updatePrice);
router.delete('/:id', PriceController.deletePrice);

module.exports = router;
