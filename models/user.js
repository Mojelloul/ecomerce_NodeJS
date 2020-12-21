const mongoose = require('mongoose');
const uuid = require('uuid');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        trim:true,
        maxlength:50,
        required:true
    },
    email:{
        type:String,
        trim:true,
        maxlength:50,
        required:true,
        unique:true
    },
    hashed_password:{
        type:String,
        required:true
    },
    salt:{
        type:String
    },
    about:{
        type:String,
        trim:true
    },
    role:{
        type:Number,
        default:0
    },
    history:{
        type:Array,
        default:[]
    }
},{timestamps:true})

userSchema.virtual('password')
.set(function(password){
    this._passeword=password;
    this.salt=uuid.v1()
    this.hashed_password = this.cryptPassword(password)
})
.get(function(){
    return this._passewords;
})

userSchema.methods = {
    authonticate:function(plainText){
        return this.cryptPassword(plainText) === this.hashed_password
    },
    cryptPassword: function(password){
        if(!password) return '';
        try{
            return crypto
            .createHmac('sha1', this.salt)
            .update(password)
            .digest('hex');
        }
        catch{

        }
    }
}
module.exports = mongoose.model('User',userSchema)