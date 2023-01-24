const toReadAll = () => {
    return `SELECT * FROM pedidos`;
}

const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (default,'${model.cliente}','${model.endereco}','${model.produto}',curdate(),curtime(),curtime(),curtime(),'${model.id_entregador}')`;
}

module.exports = {
    toReadAll,
    toCreate
}