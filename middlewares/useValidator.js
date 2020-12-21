exports.userSignUpValidator = (req,res,next)=>{
    req.check('name','name is Required !').notEmpty()
    req.check('email').isEmail().notEmpty()
    req.check('password','Password is Required !')
    .notEmpty().isLength({min:6, max:10})
                         .withMessage('Password must between 6 and 10 ')
    const errors = req.validationErrors()
    if(errors)
        return res.status(400).json(errors)
    next()
}