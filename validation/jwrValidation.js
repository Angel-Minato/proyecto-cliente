const jwt = require("jsonwebtoken");
const db = require("../database").config;
const middlewera ={
    validateToken: function(req,res,next)
    {
        const bearerHeader = req.headers["authorization"];
        if(typeof bearerHeader !== 'undefined'){
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            jwt.verify(bearerToken, db.secret_key, (err, data) =>{
                if(err)
                {
                    res.status(401);
                    res.json({
                        "success" : false,
                        "code" :401,
                        "message" : "Invalidetion token",
                        "data" : err
                    });
                }
                else
                {
                    /*let timeActual = new Date().getTime();
                    let limite = data.user.time;
                    if(timeActual <= limite)
                    {*/
                        next()
                }
                   /* else
                    {
                        res.status(401);
                        res.json({
                            "success" : false,
                            "code" :401,
                            "message" : "Expiration su token",
                            "data" : []
                        });
                    }
                }*/
            });
        }
        else
        {
            res.status(401);
            res.json({
                "success" : false,
                "code" :401,
                "message" : "Nesesita un token",
                "data" : []
            });
        }

    }
}
module.exports = middlewera;