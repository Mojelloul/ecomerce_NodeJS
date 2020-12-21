const express = require('express');
const router = express.Router();
const {createProduct,relatedProduct,showProduct,searchProduct,productById,remouveProduct,updateProduct,getOneProduct,allProduct} = require('../controllers/productController')
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth')
const {userById} = require('../middlewares/user')

router.get('/', allProduct)
router.get('/:productId', showProduct)
router.get('/related/:productId', relatedProduct)
router.post('/search', searchProduct)

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createProduct)
router.delete('/:productId/:userId',[requireSignIn, isAuth, isAdmin], remouveProduct)
router.put('/:productId/:userId',[requireSignIn, isAuth, isAdmin], updateProduct)
router.get('/:productId/:userId', getOneProduct)

router.param('userId',userById)
router.param('productId',productById)


module.exports = router;