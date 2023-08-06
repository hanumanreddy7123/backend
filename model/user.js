const mongoose=require('mongoose')
const bcrypt=require('bcrypt')
const movieSchema=new mongoose.Schema({
    title:String,
    year:String,
    id:String  ,
    poster:String
})
const userModel=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    movie:[movieSchema]
})
userModel.pre('save',async function()
{
    this.password=await bcrypt.hash(this.password, 10)
})

module.exports=mongoose.model('artist',userModel)