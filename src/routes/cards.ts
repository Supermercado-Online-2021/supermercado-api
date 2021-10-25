
import express from 'express';

import cardsController from '../controllers/cardsController';

import userAuthMiddleware from '../middlewares/userAuthentication';
import { validateCardAttributes } from '../middlewares/validateAttributes';



const router = express.Router();

router.get( '/cards', userAuthMiddleware, validateCardAttributes, cardsController.findAllCards );
router.post( '/cards', userAuthMiddleware, cardsController.addCard );

router.get( '/cards/:id', userAuthMiddleware, validateCardAttributes, cardsController.findCard );
router.delete( '/cards/:id', userAuthMiddleware, cardsController.removeCard );

router.get( '/cards/types', cardsController.findAllTypes );



export default router;
