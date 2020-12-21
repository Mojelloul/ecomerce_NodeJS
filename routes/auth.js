const express = require('express');
const router = express.Router();
const {salam,signup,signin,signout} = require('../controllers/authController')
const {requireSignIn} = require('../middlewares/auth')
const {userSignUpValidator} = require('../middlewares/useValidator')

router.get('/',salam)
router.post('/signup',userSignUpValidator,signup)
router.post('/signin',signin)
router.get('/signout',signout)
router.get('/hello',requireSignIn,(req,res)=>{
    res.send('helloooo')
})

module.exports=router;