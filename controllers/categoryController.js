const category = require('../models/category');
const Category = require('../models/category')

exports.createCategory = (req, res) =>{
    const category = new Category(req.body);

    category.save((err, category) => {
        if(err){
                return res.status(400).json({
                    error: 'bad Request !'
                })
        }
        res.json({
            category
        })
    })
}

exports.categoryId = (req, res, next, id)=>{
    Category.findById(id).exec((err,category)=>{
        if(err || !category){
            return res.status(404).json({
                error: 'category Not Found !'
            })
        }
        req.category = category;
        next()
    })
}

exports.getOneCategory = (req, res) => {
    const category = req.category ;
    if(!category) res.status(404).json({error:'not found !'})
    res.json({
        category
    })
}

exports.updateCategory = (req, res) => {
    let category = req.category;
    category.name = req.body.name;
    category.save((err,category)=>{
        if(err){
            return res.status(400).json({
                error:"bad request !"
            })
        }
        res.json({
            category,
            message: 'Category updated'
        })
    })
}

exports.deleteCategory = (req, res) => {
    let category = req.category;
    category.remove((err,category)=>{
        if(err){
            return res.status(404).json({
                error:"bad not found !"
            })
        }
        res.status(204).json({
            message: 'Category deleted'
        })
    })
}

exports.allCategories = (req, res) => {
    Category.find().exec((err, category)=>{
        if(err){
            return res.status(500).json({
                error: err
            })
        }
        res.json({
            category
        })
    })
}