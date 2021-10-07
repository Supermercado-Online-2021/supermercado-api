
import express from 'express';

import users from './users';
import categories from './categories';
import products from './products';
import favorites from './favorites';



const router = express.Router();

router.use(users);
router.use(categories);
router.use(products);
router.use(favorites);



export default router;
