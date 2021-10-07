
import express from 'express'

import productController from '../controllers/productController/';

import validatePagination from '../middlewares/validatePagination';
import { validateProductAttributes } from '../middlewares/validateAttributes';
import { opcionalAuthUserMiddleware } from '../middlewares/userAuthentication';
import userProductRelationshipMiddleware from '../middlewares/userProductRelationship';



const router = express.Router();

router.use(opcionalAuthUserMiddleware);
router.use(validateProductAttributes);

router.get( '/product/:id', productController.findProductByPk );

router.get( '/products', validatePagination, productController.findAllProducts );
router.get( '/products/category/:category_id', validatePagination, productController.findProductsByCategory );
router.get( '/products/name/:name', validatePagination, productController.findProductsByName );

router.use( userProductRelationshipMiddleware );


export default router;
