exports.userSignUpValidator = (req,res,next)=>{
    req.check('name','name is Required !').notEmpty()
    req.check('email','email is Required !').isEmail().notEmpty()
    req.check('password','Password is Required !')
    .notEmpty().isLength({min:6, max:10})
                         .withMessage('Password must between 6 and 10 ')
    const errors = req.validationErrors()
    if(errors)
        return res.status(400).json({error:errors[0].msg})
    next()
}