const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let Veiculo = await prisma.manutencaoVeicular.create({
        data: req.body
    });

    res.status(200).json(Veiculo).end();
}

const read = async (req, res) => {
    let Veiculo = await prisma.manutencaoVeicular.findMany();

    res.status(200).json(Veiculo).end();
}

module.exports = {
    create,
    read
}