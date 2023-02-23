const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let operacao = await prisma.operacaoVeicular.create({
        data: req.body
    });

    res.status(200).json(operacao).end();
}

const read = async (req, res) => {
    let operacao = await prisma.operacaoVeicular.findMany();

    res.status(200).json(operacao).end();
}

module.exports = {
    create,
    read
}