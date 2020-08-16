const express = require('express');
const router = express.Router();
const productsCtrl = require('../controllers/products');

router.get('/', productsCtrl.getAllProducts);
router.post('/', productsCtrl.createProduct);
router.get('/:id', productsCtrl.getOneProduct);
router.put('/:id', productsCtrl.modifyProduct);
router.delete('/:id', productsCtrl.deleteProduct);

module.exports = router;