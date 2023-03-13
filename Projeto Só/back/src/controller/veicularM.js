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

const update = async (req, res) => {
    let info = {
        dataF:new Date()
    }
    const Veiculo = await prisma.manutencaoVeicular.update({
        data: info,
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(202).end();
}
module.exports = {
    create,
    read,
    update
}