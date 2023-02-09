const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let detalhes = await prisma.Detalhes.create({
        data: req.body
    });

    res.status(200).json(detalhes).end();
}

const read = async (req, res) => {
    let detalhes = await prisma.Detalhes.findMany();

    res.status(200).json(detalhes).end();
}


const update = async (req, res) => {

    const detalhes = await prisma.Detalhes.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(detalhes).end();
}

const remove = async (req, res) => {

    const detalhes = await prisma.Detalhes.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(detalhes).end();
}



module.exports = {
    create,
    read,
    update,
    remove
}
