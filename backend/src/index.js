const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');


const app = express();

//const server = require('http').Server(app);
//const io = require('socket.io')(server);
//conexao com o mongodb
mongoose.connect('mongodb+srv://dbUnectTODO:UnectTODO@cluster0.svzi1.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/*app.use((req,res, next)=> {
    req.io = io;

    next();
})*/

//app.use(cors());
//mostrando o acesso a rotas de conexão
app.use(require('./routes'));
app.listen(3030);