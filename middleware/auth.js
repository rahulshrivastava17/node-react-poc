const jwt = require('jsonwebtoken');
const config =require('config');

module.exports = function(req, res, next){
    //Get toekn from header
    const token = req.header('x-auth-token');

    //Check if not token
    if(!token){
        return res.status(401).json({msg:'No token, Authorization denied'});
    }
    //Verify token
    try{
        const decoded = jwt.verify(jwt, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    }catch(err){
        res.status(401).send('Invalid token');
    }
}