const express=require('express')
const mongoose=require('mongoose')
const cors=require('cors')
const app=express()
app.use(cors())
const bodyParser=require('body-parser')
const { home } =require('./controller/home')
const {register}=require('./controller/registration')
const {auth}=require('./middleware/auth')
const db=require('./model/user')
const { login } = require('./controller/login')
const { playlist } = require('./controller/playlist')
const { getplaylist } = require('./controller/getplaylist')
const { remove } = require('./controller/remove')
app.use(bodyParser.json());
mongoose.connect('mongodb+srv://hanumanreddy:reddy9398@cluster.pqs5jfb.mongodb.net/?retryWrites=true&w=majority')
.then((res)=>
{
 console.log("Database connnection is done")
})
.catch((err)=>
{
    console.log("Database connection is not done")
})
// const{auth1}=require('./middleware/auth')
app.get('/home',auth,home)
app.post('/register',register)
app.post('/login',login)
app.post('/playlist',playlist)
app.get('/getplaylist/:id',getplaylist)
app.delete('/remove/:id/:imdbId',auth,remove)
app.listen('5050',()=>
{
    console.log('server started and running at port 5050')
})