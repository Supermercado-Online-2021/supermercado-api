
import express from 'express';
import userAuthMiddleware from '../middlewares/userAuthentication';
import validatePagination from '../middlewares/validatePagination';

import cartController from '../controllers/cartController'; 



const router = express.Router();

router.get( '/cart', userAuthMiddleware, validatePagination, cartController.findAllProducts );

router.post( '/cart/:product_id', userAuthMiddleware, cartController.addProduct  );
router.delete( '/cart/:id', userAuthMiddleware, cartController.removeProduct );
router.put( '/cart/:id', userAuthMiddleware, cartController.updateProductAmount );



export default router;
