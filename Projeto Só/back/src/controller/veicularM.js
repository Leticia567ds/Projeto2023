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

const alterar = async (req, res) => {
    const Veiculo = await prisma.manutencaoVeicular.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    });
    res.status(202).json(Veiculo).end();
}

const remove = async (req, res) => {
    let Veiculo = await prisma.manutencaoVeicular.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    .then(resp => {
        if (resp)
            res.status(200).json({ resposta: resp }).end();
        else
            res.status(404).json({ resposta: resp }).end();
    })
    .catch(err => {
        res.status(500).json({ erro: err }).end();
    });
}

module.exports = {
    create,
    read,
    update,
    remove,
    alterar
}