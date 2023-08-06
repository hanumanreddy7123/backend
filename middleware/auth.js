// auth=(req,res,next)=>{
//     next()
// }
// module.exports={auth}
const secretkey='qwertyuio'
const jwt=require('jsonwebtoken')
auth=(req,res,next)=>
{
    try{
    const jswt=req.headers.authorization
    console.log("token " +jswt)
    if(jswt)
    {
    const token1=jswt.split(" ")[1]
    console.log(token1)
    let user=jwt.verify(token1,secretkey)
    req.email=user.email
    next()
    }
else{
    res.send({message:'no token '})
}
}catch(error)
{
    res.send({message:'unauthorized user'})
}
}
module.exports={auth}