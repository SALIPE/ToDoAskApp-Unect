//criando rotasd de conexão
const express = require('express');
const multer = require('multer');
const PostController = require('./controller/PostController');
const UpdateController = require('./controller/UpdateController');
const DeleteController = require('./controller/DeleteController');

const routes = new express.Router(); 
const upload = multer();

routes.post('/posts',upload.single(), PostController.store);
routes.get('/posts/todo', PostController.index);
routes.get('/posts/completed', PostController.completed);
//metodo criado so para ter uma visualização geral de todos os registros
routes.get('/posts/showall', PostController.showAll);
routes.put('/posts/update/:id', UpdateController.update);
routes.delete('/posts/delete/:id', DeleteController.delete);

module.exports = routes;