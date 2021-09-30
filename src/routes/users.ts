
import userController from '../controllers/userController';
import userValidationMiddleware from '../middlewares/userValidation';

import express from 'express'



const router = express.Router();

router.post( '/register/user/', userValidationMiddleware, userController.userInsert );
router.post( '/user/signin', userController.signInUser );



export default router;
