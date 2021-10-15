
import express from 'express';

import users from './users';
import favorites from './favorites';
import address from './addresses';

import categories from './categories';
import products from './products';



const router = express.Router();

router.use(users);
router.use(categories);
router.use(products);
router.use(favorites);
router.use(address);



export default router;
