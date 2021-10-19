
import express from 'express'

import productController from '../controllers/productController/';

import validatePagination from '../middlewares/validatePagination';
import { validateProductAttributes } from '../middlewares/validateAttributes';
import { opcionalAuthUserMiddleware } from '../middlewares/userAuthentication';
import userProductIncludeMiddleware from '../middlewares/userProductIncludeMiddleware';



const router = express.Router();


const defaultMiddlewares = [
    opcionalAuthUserMiddleware,
    validateProductAttributes,
    validatePagination,
    userProductIncludeMiddleware
];

router.get( '/product/:id', 
    opcionalAuthUserMiddleware,
    validateProductAttributes,
    productController.findProductByPk
);

router.get( '/products', 
    ...defaultMiddlewares,  
    productController.findAllProducts 
);

router.get( '/products/category/:category_id', 
    ...defaultMiddlewares,  
    productController.findProductsByCategory 
);

router.get( '/products/name/:name', 
    ...defaultMiddlewares,  
    productController.findProductsByName 
);



export default router;
