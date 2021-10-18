
import express from 'express';

import cardsController from '../controllers/cardsController';

import userAuthMiddleware from '../middlewares/userAuthentication';
import { validateCardAttributes } from '../middlewares/validateAttributes';



const router = express.Router();

router.post( '/cards', userAuthMiddleware, cardsController.addCard );

router.get( '/cards/types', cardsController.findAllTypes );
router.get( '/cards', userAuthMiddleware, validateCardAttributes, cardsController.findAllCards );
router.get( '/cards/:id', userAuthMiddleware, validateCardAttributes, cardsController.findCard );

router.delete( '/cards/:id', userAuthMiddleware, cardsController.removeCard );



export default router;
