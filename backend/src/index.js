const express = require('express');
const mongoose = require('mongoose');

const app = express();
//conexao com o mongodb
mongoose.connect('mongodb+srv://dbUnectTODO:UnectTODO@cluster0.xs9pv.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
//mostrando o acesso a rotas de conexão
app.use(require('./routes'));

app.listen(3333);