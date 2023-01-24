const express = require('express');
const cors = require('cors');

const EntregadorRoute = require('./src/routes/EntregadorRoutes.js');
const PedidoRoute = require('./src/routes/PedidoRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(EntregadorRoute);
app.use(PedidoRoute);

app.listen(5000, () => {
    console.log("Saia imediatamente esse dispositivo vai explodir em 5..4..3..2...1(explode).");
});