const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    info.data = new Date(req.body.data)
    
    let vendas = await prisma.Vendas.create({
        data: req.body
    });

    res.status(200).json(vendas).end();
}

const read = async (req, res) => {
    let vendas = await prisma.Vendas.findMany({
        select: {
            data: true,
            id_vendedor: true,
        }
    });

    res.status(200).json(vendas).end();
}

const update = async (req, res) => {
    var info = req.body;

    info.data = new Date(req.body.data)
    const vendas = await prisma.Vendas.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })

    res.status(200).json(vendas).end();
}


const remove = async (req, res) => {

    const vendas = await prisma.Vendas.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}
