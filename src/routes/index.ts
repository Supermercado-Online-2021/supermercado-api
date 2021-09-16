
import express from 'express';

import users from './users';
import categories from './categories';
import products from './products';



const router = express.Router();

router.use(users);
router.use(categories);
router.use(products);



export default router;
