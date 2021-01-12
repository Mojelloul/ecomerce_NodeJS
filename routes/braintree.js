const express = require('express');
const {userById} = require('../middlewares/user')
const {generateToken,processPayment} = require('../controllers/braintreeController')
const router = express.Router();
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth')

router.get('/getToken/:userId', [requireSignIn, isAuth], generateToken)
router.post('/purchase/:userId', [requireSignIn, isAuth], processPayment)

router.param('userId',userById)
module.exports = router;