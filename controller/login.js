const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')
const secretkey='qwertyuio'

const artist = require('../model/user');

const login = async (req, res) => {
    const token=jwt.sign(req.body.email,secretkey)
    // const { authorization } = req.headers;
    // if (!authorization) {
    //     return res.status(401).send({ message: 'Unauthorized', code: 401 });
    // }

    const data = await artist.findOne({ email: req.body.email });
    console.log(data)

    if (data) {
        const match =await bcrypt.compare(req.body.password, data.password);
        if (match) {
            return res.send({ message: 'Authorized user', code: 200,token,userid:data._id });
        } else {
            return res.send({ message: 'Password mismatch', code: 404 });
        }
    } 
    // else {
    //     // const emailExists = await artist.findOne({ email: req.body.email });
    //     // if (emailExists) {
    //     //     return res.status(401).send({ message: 'Email exists', code: 401 });
    //     // } 
    //     else {
    //         return res.status(404).send({ message: 'User not found', code: 404 });
    //     }
    // }
    else {
                return res.status(404).send({ message: 'User not found', code: 404 });
            }
};

module.exports = { login };
