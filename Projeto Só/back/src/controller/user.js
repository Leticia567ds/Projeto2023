const { PrismaClient } = require('@prisma/client');

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

    //SELECT id, nome FROM usuario WHERE email = '' AND senha = ''
    
    res.status(200).json(usuario[0]).end();
}

module.exports = {
    login,
    read,
    create
}