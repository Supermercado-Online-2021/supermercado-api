
import userController from '../controllers/userController';
import userValidationMiddleware from '../middlewares/userValidation';
import userAuthMiddleware, { opcionalAuthUserMiddleware } from '../middlewares/userAuthentication';

import express from 'express'



const router = express.Router();

router.post( '/user/register', userValidationMiddleware, userController.userInsert );
router.post( '/user/signout', userAuthMiddleware, userController.signOutUser );
router.post( '/user/signin', userController.signInUser );
router.post( '/user/logged', opcionalAuthUserMiddleware, ( _, res ) => { 
    return res.status(200).json(res.locals) 
})



export default router;
