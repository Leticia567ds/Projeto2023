const toRead = () => {
    return `SELECT * FROM pedidos order by id_pedido desc limit 5`;
}

const toCreate = (model) => {
    return `INSERT INTO pedidos VALUES (default,'${model.cliente}','${model.endereco}','${model.produto}',curdate(),curtime(),NULL,NULL,'${model.id_entregador}')`;
}

const toDelete= (model) => {
    return `DELETE FROM pedidos WHERE id_pedido='${model.id_pedido}'`;
}

const toReadCaminho = () => {
    return `SELECT * FROM vw_caminho order by id_pedido desc limit 5`;
};


const toUpdate = (model) => {
    return `UPDATE pedidos SET cliente = '${model.cliente}',endereco ='${model.endereco}', produto = '${model.produto}',id_entregador = ${model.id_entregador} WHERE id_pedido = ${model.id_pedido}`;
}
const toUpdateCozinha = (model) => {
    return `UPDATE pedidos SET hora_entrega = curtime() WHERE id_pedido = ${model.id_pedido}`;
}

const toUpEntrega = (model) => {
    return `UPDATE pedidos SET hora_fim = curtime() WHERE id_pedido = ${model.id_pedido}`;
}


module.exports = {
    toRead,
    toCreate,
    toDelete,
    toUpdate,
    toUpdateCozinha,
    toUpEntrega,
    toReadCaminho
}