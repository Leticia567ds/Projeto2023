const toReadAll = () => {
    return `SELECT * FROM pedidos`;
}

const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (default,'${model.cliente}','${model.endereco}','${model.produto}',curdate(),curtime(),curtime(),curtime(),'${model.id_entregador}')`;
}

const toDelete= (model) => {
    return `DELETE FROM pedidos WHERE id_pedido='${model.id_pedido}'`;
}

const toUpdate = (model) => {
    return `UPDATE pedidos SET cliente = '${model.cliente}', endereco = '${model.endereco}', produto = '${model.produto}' WHERE id_pedido = ${model.id_pedido}`;
}

module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}