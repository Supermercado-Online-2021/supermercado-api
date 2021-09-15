
import express from 'express';

import users from '@Routes/users';
import categories from '@Routes/categories';
import products from '@Routes/products';



const router = express.Router();

router.use(users);
router.use(categories);
router.use(products);



export default router;
