
import express from 'express';
// import validateAddressMiddleware from 'src/middlewares/validateAddressMiddleware';
import addressController from '../controllers/addressController/';
import userAuthMiddleware from '../middlewares/userAuthentication';



const router = express.Router();

router.post( '/addresses', userAuthMiddleware, addressController.insertAddress );
router.get( '/addresses', userAuthMiddleware, addressController.findAllAddresses );
router.get( '/addresses/:id', userAuthMiddleware, addressController.findOne );
router.put( '/addresses/:id', userAuthMiddleware, addressController.updateAddress );
router.delete( '/addresses/:id', userAuthMiddleware, addressController.removeAddress );



export default router;
