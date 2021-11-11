
import express from 'express';

import favoriteController from '../controllers/favoriteController';
import userAuthMiddleware from '../middlewares/userAuthentication';
import validatePagination from '../middlewares/validatePagination';
import userProductIncludeMiddleware from '../middlewares/userProductIncludeMiddleware';



const router = express.Router();

router.post( '/favorites/product/:product_id', userAuthMiddleware, favoriteController.toggleProductFavorites );

router.get( '/favorites/user', 
    userAuthMiddleware, 
    validatePagination, 
    userProductIncludeMiddleware, 
    favoriteController.findAllFavorites 
);



export default router;
