const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let motorista = await prisma.motorista.create({
        data: req.body
    });

    res.status(200).json(motorista).end();
}

const read = async (req, res) => {
    let motorista = await prisma.motorista.findMany();

    res.status(200).json(motorista).end();
}

const update = async (req, res) => {
    let motorista = await prisma.motorista.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    });

    res.status(200).json(motorista).end();
}

const remove = async (req, res) => {
    let motorista = await prisma.motorista.delete({
        where: {
            id: Number(req.params.id)
        }
    });

    res.status(200).json(motorista).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}