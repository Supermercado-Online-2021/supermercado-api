
import express from 'express';
import validateAddressMiddleware from '../middlewares/validateAddressMiddleware';
import addressController from '../controllers/addressController/';
import userAuthMiddleware from '../middlewares/userAuthentication';



const router = express.Router();

router.get( '/addresses', userAuthMiddleware, addressController.findAllAddresses );
router.get( '/addresses/:id', userAuthMiddleware, addressController.findOne );

router.post( '/addresses', userAuthMiddleware, validateAddressMiddleware, addressController.insertAddress );
router.put( '/addresses/:id', userAuthMiddleware, validateAddressMiddleware, addressController.updateAddress );

router.delete( '/addresses/:id', userAuthMiddleware, addressController.removeAddress );



export default router;
