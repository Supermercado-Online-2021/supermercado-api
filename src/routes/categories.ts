
import express from 'express'

import categoryController from '../controllers/categoryController/';



const router = express.Router();

router.get( '/categories', categoryController.findAllCategories )



export default router;
