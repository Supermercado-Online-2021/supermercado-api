
import express from 'express'

import productController from '../controllers/productController/';

import validatePagination from '../middlewares/validatePagination';
import { validateProductAttributes } from '../middlewares/validateAttributes';
import { opcionalAuthUserMiddleware } from '../middlewares/userAuthentication';
import userProductRelationshipMiddleware from '../middlewares/userProductRelationship';



const router = express.Router();


const defaultMiddlewares = [
    opcionalAuthUserMiddleware,
    validateProductAttributes,
]



router.get( '/product/:id', 
    productController.findProductByPk, 
    userProductRelationshipMiddleware );

router.get( '/products', 
    ...defaultMiddlewares, 
    validatePagination, 
    productController.findAllProducts, 
    userProductRelationshipMiddleware 
);

router.get( '/products/category/:category_id', 
    ...defaultMiddlewares, 
    validatePagination, 
    productController.findProductsByCategory,
    userProductRelationshipMiddleware 
);

router.get( '/products/name/:name', 
    ...defaultMiddlewares, 
    validatePagination, 
    productController.findProductsByName, 
    userProductRelationshipMiddleware 
);



export default router;
