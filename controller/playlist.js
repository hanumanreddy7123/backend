const artist = require("../model/user")
const playlist= async (req,res)=>
{
    console.log("IN backend playlist")
    console.log(req.body)
    console.log(req.body.paly)
    const data=await artist.updateOne({_id:req.body.id},{$addToSet:{movie:req.body.paly}})
    res.send({message:'in Playlist',data})
}
module.exports={playlist}