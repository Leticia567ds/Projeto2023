const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    console.log(req.body)
    let produtos = await prisma.produtos.create({
        data: req.body
    });

    res.status(200).json(produtos).end();
}


const read = async (req, res) => {
    let produtos = await prisma.produtos.findMany({
        select:{
            nome:true,
            valor:true,
            setor_id:true
        }
        
    });
    res.status(200).json(produtos).end();
}


module.exports = {
    create,
    read
   
}
