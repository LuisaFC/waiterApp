import path from 'node:path';

import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';

export const router = Router();

//Image upload saving it at the upload folder
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${file.originalname}-${Date.now()}.png`);
    }
  })
});

//List categories
router.get('/categories', listCategories);

//Create category
router.post('/categories', createCategory);

//List products
router.get('/products', listProducts);

//Create product
router.post('/products', upload.single('image'),  createProduct);

//Get category by id
router.get('/categories/:categoryId/products', listProductsByCategory);

//List orders
router.get('/orders', (req, res) => {
  res.send('ok');
});

//Create order
router.post('/orders', (req, res) => {
  res.send('ok');
});

//Change order status
router.patch('/orders/orderId', (req, res) => {
  res.send('ok');
});

//Delete order
router.delete('/orders/orderId', (req, res) => {
  res.send('ok');
});
