const logger = function (req,res,next){
    console.log("Logger "+new Date()+req.url);
    next();
}
module.exports = logger;