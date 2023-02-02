const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let setor = await prisma.Setor.create({
        data: req.body
    });

    res.status(200).json(setor).end();
}

const readOne = async (req, res) => {
    let setor = await prisma.Setor.findUnique({
        where: {
            id: Number(req.params.id)
        }, 
        select: {
            nome: true,
            comissao: true,
            produtos: {
                select: {
                    nome: true,
                    valor: true
                }
            },
            vendedor: {
                select:{
                    nome:true,
                    salario:true
                }
            },
        }
    })

    //SELECT * FROM usuario INNER JOIN publicacao ON usuario.id = publicacao.usuario_id WHERE ....

    res.status(200).json(setor).end();
}

const read = async (req, res) => {
    let setor = await prisma.Setor.findMany({
        select: {
            nome: true,
            comissao: true
        }
    });

    res.status(200).json(setor).end();
}

module.exports = {
    create,
    read,
    readOne
}
