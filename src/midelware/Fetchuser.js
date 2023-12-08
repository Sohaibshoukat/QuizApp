import jwt from "jsonwebtoken";


const JWT_KEY = "AttendanceRecognization";

const fetchuser = (req,res,next)=>{

    const Token = req.header('auth-token')
    if(!Token)
    {
        res.status(401).send({error:"Please authenticate token 123"})
    }
    
    try {
        const data = jwt.verify(Token,JWT_KEY)
        
        req.user=data.user;
        
        next();
        
    } catch (error) {
        res.status(401).send({error:"Please authenticate token"})
    }
}

module.exports = fetchuser;