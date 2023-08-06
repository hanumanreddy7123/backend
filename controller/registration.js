const jwt=require('jsonwebtoken')
const secretkey='qwertyuio'
const bcrypt=require('bcrypt')
const artist=require('../model/user')
 register= async (req,res)=>
{
   // const token=jwt.sign(req.body.email,secretkey)
//   await  bcrypt.hash(req.body.password,10)
//    .then((data)=>{
//     hashed=data
//    }
//    )
//    .catch((err)=>
//    {
//     console.log("error")
//    })
//    const user=
//    {
//     name:req.body.name,
//     email:req.body.email,
//     password:hashed

//    }
    const { email } = req.body;

    // Check if email or password already exists
    const existingUser = await artist.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: "Email already exists" });
    }
   else
   {

   const data= new artist(req.body)
   const result= await data.save()
   console.log('Data stored in database')
   res.send({mesage:"data posted successfully" ,code:200})
   }

   
}
module.exports={register}