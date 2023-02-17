const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    let { id_vendedor } = req.body;

    let venda = await prisma.vendas.create({
        data: {
            id_vendedor,
            data: new Date(),
            detalhes: {
                create: req.body.detalhes
            }
        }
    });

    res.status(200).json(venda).end();
}



// const read = async (req, res) => {
//     let vendas = await prisma.Vendas.findMany({
//         select: {
//             data: true,
//           detalhes:true
//         }
//     });

//     res.status(200).json(vendas).end();
// }

const read = async (req, res) => {
    let vendas = await prisma.Vendas.findMany({ 
        select: {
            data: true,
            Vendedores: {
                select:{
                    nome: true
                }
            },
            detalhes: {
            select:{
          quantidade: true,
          produtos: {
            select:{
                nome: true,
                valor: true
            }
          }
            }
        }
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
    remove,
    // readOne
}
