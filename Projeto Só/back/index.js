const express = require('express');
const cors = require('cors');

const app = express();

const User = require('./src/router/LoginRoute');
const Frota = require('./src/router/frotaRoute');
const Motorista = require('./src/router/motorRoute');
const vm = require('./src/router/veiculoMRouter');
const vo = require('./src/router/veiculoORoute');

app.use(cors());
app.use(express.json());

app.use(User);
app.use(Frota);
app.use(Motorista);
app.use(vm);
app.use(vo);

app.listen(3000, () => { console.log("Running Jeck") })