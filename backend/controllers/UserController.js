const useService = require('./../services/UserService');

async function registerUser(req,res){
    try
    {
        let user = req.body;
        let token = await useService.registerUser(user);
        res.json({
            message:'Register success',
            token
        })
    }
    catch(err){
        res.status(400).send({
            message: err.message,
        })
    }
}
async function login(req,res){
    try
    {
        let user = req.body;
        let token = await useService.loginUser(user);
        res.json({
            message:'Login successful',
            token
        })
    }
    catch(err){
        res.status(401).send({
            message: err.message,
        })
    }
}
module.exports = {
    registerUser,
    login,
}