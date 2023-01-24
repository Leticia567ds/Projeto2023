const toReadAll = () => {
    return `SELECT * FROM entregadores`;
}

const toLogin = (model) => {
    
    return `SELECT * FROM entregadores WHERE email = '${model.email}' and senha = '${model.senha}'`;
}

module.exports = {
    toReadAll,
    toLogin
}