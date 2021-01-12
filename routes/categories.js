const express = require('express');
const {userById} = require('../middlewares/user')
const router = express.Router();
const {createCategory,categoryId,getOneCategory,updateCategory,deleteCategory,allCategories} = require('../controllers/categoryController')
const {requireSignIn, isAuth, isAdmin} = require('../middlewares/auth')

router.post('/create/:userId', [requireSignIn, isAuth, isAdmin], createCategory)
router.put('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin], updateCategory)
router.delete('/:categoryId/:userId', [requireSignIn, isAuth, isAdmin], deleteCategory)
router.get('/:categoryId/:userId', getOneCategory)
router.get('/', allCategories)


router.param('categoryId',categoryId)
router.param('userId',userById)


module.exports = router;