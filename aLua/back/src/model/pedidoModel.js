const toReadAll = () => {
    return `SELECT pedidos.*, entregadores.nome FROM pedidos INNER JOIN entregadores ON pedidos.id_entregador = entregadores.id_entregador`;
}

const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (default,'${model.cliente}','${model.endereco}','${model.produto}',curdate(),curtime(),NULL,NULL,'${model.id_entregador}')`;
}

const toDelete= (model) => {
    return `DELETE FROM pedidos WHERE id_pedido='${model.id_pedido}'`;
}

const toUpdate = (model) => {
    return `UPDATE pedidos SET cliente = '${model.cliente}', endereco = '${model.endereco}', produto = '${model.produto}' WHERE id_pedido = ${model.id_pedido}`;
}

const toUpdateCozinha = (model) => {
    return `UPDATE pedidos SET hora_entrega = curtime() WHERE id_pedido = ${model.id_pedido}`;
}

const toUpEntrega = (model) => {
    return `UPDATE pedidos SET hora_fim = curtime() WHERE id_pedido = ${model.id_pedido}`;
}


module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate,
    toUpdateCozinha,
    toUpEntrega
}