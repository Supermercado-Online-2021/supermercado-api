
import express from 'express';

import favoriteController from '../controllers/favoriteController';
import userAuthMiddleware from '../middlewares/userAuthentication';
import validatePagination from '../middlewares/validatePagination';



const router = express.Router();

router.post( '/favorites/product/:product_id', userAuthMiddleware, favoriteController.addProductFavorites );
router.delete( '/favorites/product/:id', userAuthMiddleware, favoriteController.removeProductFavorites );
router.get( '/favorites/user', userAuthMiddleware, validatePagination, favoriteController.findAllFavorites );



export default router;
