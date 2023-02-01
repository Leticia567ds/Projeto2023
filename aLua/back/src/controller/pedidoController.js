const con = require('../dao/lanche.js');
const pedi = require('../model/pedidoModel.js');

const listarAll = (req, res) => {
    con.query(pedi.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarCaminho = (req, res) =>  {
    con.query(pedi.toReadCaminho(), (err, result) => {
        if (err == null) {
            res.json(result).status(200).end();
        } else {
            res.status(500).end();
        }
    })
}

const criarPedido = (req, res) => {
    con.query(pedi.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const ExcluirPedido = (req, res) => {
    con.query(pedi.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const UpdatePedido = (req, res) => {
    con.query(pedi.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(500).json(err).end();
        }
    })
}




const UpCozinha = (req, res) => {
    con.query(pedi.toUpdateCozinha(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const UpEntrega = (req, res) => {
    con.query(pedi.toUpEntrega(req.body), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


module.exports = {
    listarAll,
    criarPedido,
    UpdatePedido,
    ExcluirPedido,
    UpCozinha,
    UpEntrega,
    listarCaminho
}