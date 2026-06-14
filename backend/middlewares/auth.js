const jwt = require("jsonwebtoken");
const {config} = require("../config/Config");
async function verify(req, res,next) {
    console.log('verify ');
    let authorization = req.headers.authorization;
    if (!authorization) {
        res.status(401).json({
            message:'Not authorized'
        });
    }
    else {
        let token = authorization.substring("Bearer ".length);
        if(token )
        {
            //console.log('jwt token ',token);
            try
            {
                let payload = await jwt.verify(token, config.TOKEN_SECRET);
                console.log('jwt payload ',payload);
                req.user = payload;
                next();
            }
            catch(e)
            {
                console.error(e);
                res.status(401).json({
                    message:'Not authorized'
                });
            }

        }
        else
        {

            res.status(401).json({
                message:'Not authorized'
            });
        }

    }
}
function checkRole(role)
{
    return async function (req,res,next){
        let user = req.user;
        if(!user)
        {
            res.status(401).json({
                message:'Not authorized'
            });
        }
        else
        {
            let userRole = user.role;
            if(role != userRole )
            {
                res.status(403).json({
                    message:'Not authorized'
                });
            }
            else
            {
                next();
            }
        }
    }
}
module.exports = {
    verify,
    checkRole,
}