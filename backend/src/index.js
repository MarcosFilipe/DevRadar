const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb+srv://root:123123123@cluster0-exbr1.gcp.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use(routes);

// Tipos de parâmetros

// Query Params: req.query  (Filtros, ordenação, paginação, ...);
// Route Params: req.params (Identificar um recurso na alteração ou remoção);
// body        : req.body   (Dados para criação ou alteração de um registro);

//MongoDB (Não-relacional);



app.listen(3333);