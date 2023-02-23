const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let frota = await prisma.frota.create({
        data: req.body
    });

    res.status(200).json(frota).end();
}

const read = async (req, res) => {
    let frota = await prisma.frota.findMany();

    res.status(200).json(frota).end();
}

const update = async (req, res) => {
    let frota = await prisma.frota.update({
        data: req.body
    });

    res.status(200).json(frota).end();
}

const remove = async (req, res) => {
    let frota = await prisma.frota.delete({
        where: {
            id: req.params.id
        }
    });

    res.status(200).json(frota).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}