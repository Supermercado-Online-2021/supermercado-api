
import express from 'express'

import productController from '../controllers/productController/';

import validatePagination from '../middlewares/validatePagination';
import { validateProductAttributes } from '../middlewares/validateAttributes';



const router = express.Router();

const defaultMiddlewares = [ validatePagination, validateProductAttributes ]


router.get( '/products', ...defaultMiddlewares, productController.findAllProducts );
router.get( '/products/category/:category_id', ...defaultMiddlewares, productController.findProductsByCategory );
router.get( '/products/name/:name', ...defaultMiddlewares, productController.findProductsByName );
router.get( '/product/:id', validateProductAttributes, productController.findProductByPk );



export default router;
