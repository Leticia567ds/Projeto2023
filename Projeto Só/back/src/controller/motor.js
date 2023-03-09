const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let motorista = await prisma.motorista.create({
        data: req.body
        
    });
    console.log(motorista);
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
    remove
}