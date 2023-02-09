const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let vendedor = await prisma.Vendedor.create({
        data: req.body
    });

    res.status(200).json(vendedor).end();
}

const read = async (req, res) => {
    let vendedor = await prisma.Vendedor.findMany({
        select: {
            nome: true,
            salario: true,
            setor_id_vendedor: true,
            vendas:{
            select:{
                data: true,
                id_vendedor: true
        }
    }
}
});

    res.status(200).json(vendedor).end();
}

module.exports = {
    create,
    read
}
