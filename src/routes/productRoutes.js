const express = require('express');

const router = express.Router();

const productController = require('../controller/productController');

router.get('/', productController.getAllProduct);

router.get('/:id', productController.getProductById);

router.post('/', productController.createProduct);

module.exports = router;