const {Order} = require('./../models/order')

exports.create = (req,res) => {
    req.body={
        ...req.body,
        user:req.profile
    };
    const order = new Order(req.body);
    order.save((err,data)=>{
        if(err){
            return res.status(400).json({error:err})
        }
        res.json(data)
    })
}

exports.listOrders = (req, res) => {
    console.log('aaa')
    Order.find()
         .populate('user','_id, name, email')
         .sort('-createdAt')
         .exec((err, orders)=>{
             if(err){
                 return res.status(400).json({error:err.message})
             }
             res.json(orders);
         })
}