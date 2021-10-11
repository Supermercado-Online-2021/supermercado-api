
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
    validatePagination,
];

router.get( '/product/:id', 
    opcionalAuthUserMiddleware,
    validateProductAttributes,
    productController.findProductByPk, 
    userProductRelationshipMiddleware
);

router.get( '/products', 
    ...defaultMiddlewares,  
    productController.findAllProducts, 
    userProductRelationshipMiddleware 
);

router.get( '/products/category/:category_id', 
    ...defaultMiddlewares,  
    productController.findProductsByCategory,
    userProductRelationshipMiddleware 
);

router.get( '/products/name/:name', 
    ...defaultMiddlewares,  
    productController.findProductsByName, 
    userProductRelationshipMiddleware 
);



export default router;
