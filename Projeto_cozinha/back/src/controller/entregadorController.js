const con = require('../dao/lanche.js');
const en = require('../model/entregadorModel.js');

const listarEntregador = (req, res) => {
    con.query(en.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const Login = (req, res) => {
    con.query(en.toLogin(req.body), (err, result) => {
        if (err == null)
           
          if(result.length != 0){
                res.status(202).json(result[0]).end();
          }else
                res.status(404).send({
                    error: "usuario não encontrado"
                });
        else
            res.status(400).json(err).send({
                error: "erro ao fazer login."
            
            });
    });
}


module.exports = {
    listarEntregador,
    Login
}