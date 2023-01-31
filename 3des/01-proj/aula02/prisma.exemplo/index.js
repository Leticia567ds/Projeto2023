const express = require('express');
const cors = require('cors');

const app = express();
const router = require('./src/routes/routes')

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () =>{
    console.log('Saia imediatamente esse dispositivo vai explodir em 5..4..3..2...1(explode).')
})