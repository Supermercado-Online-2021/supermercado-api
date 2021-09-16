
import userController from '../controllers/userController';
import express from 'express'



const router = express.Router();

router.post( '/register/user/', userController.userInsert )



export default router;
