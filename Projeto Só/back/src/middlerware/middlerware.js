const jwb = require('jsonwebtoken');

const ValidaAcesso = (req,res,next) => {
    const token = req.headers.bearer;

    if(req.path === '/login') next();
    else {
        jwb.verify(token, process.env.KEY, (err, data) => {
            if(err != null) res.status(404).json(err).end();
            else{
                console.log(data);
                if(data.tipo === "Gerente"){
                    next();
                }else{
                    res.status(401).end();
                }
            }
        })
    }
}

module.exports = {
    ValidaAcesso
}