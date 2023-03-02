const { PrismaClient } = require('@prisma/client');

const jwb = require('jsonwebtoken');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let usuario = await prisma.Login.create({
        data: req.body
    });

    res.status(200).json(usuario).end();
}

const read = async (req, res) => {
    let usuarios = await prisma.Login.findMany({
        select: {
            email: true,
            nome: true,
            cargo: true
        }
    });

    //SELECT email, nome FROM usuario WHERE email = ''

    res.status(200).json(usuarios).end();
}

const login = async (req, res) => {
    console.log(req.body)
    let usuario = await prisma.Login.findMany({
        where: {
            AND: [
                {email : req.body.email},
                {senha : req.body.senha}
            ]
        },
        select: {
            id: true,
            nome: true,
            cargo: true
        }
    })
    
    jwb.sign(usuario[0], process.env.KEY, { expiresIn: '4h' },function(err, token) {
        
        if(err == null) {
            usuario[0]["token"] = token;
            res.status(200).json(usuario[0]).end();
        }else {
            res.status(404).json(err).end();
        }
    })
}

const update = async (req, res) => {
    const usuario = await prisma.user.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(usuario).end();
}

const del = async (req, res) => {
    const usuario = await prisma.user.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

module.exports = {
    login,
    read,
    create,
    update,
    del
}