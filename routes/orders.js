const express = require('express');
const {userById,addProductsToUserHistory} = require('../middlewares/user')
const {decreaseQuantity} = require('../middlewares/product')
const router = express.Router();
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth')
const {create,listOrders} = require('./../controllers/OrderController')

router.post('/create/:userId', [requireSignIn, isAuth,addProductsToUserHistory], create)
router.get('/:userId', [requireSignIn, isAuth,isAdmin], listOrders)

router.param('userId',userById)
module.exports = router;