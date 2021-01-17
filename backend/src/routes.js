//criando rotasd de conexão
const express = require('express');
const multer = require('multer');
const PostController = require('./controller/PostController');
const UpdateController = require('./controller/UpdateController');
const DeleteController = require('./controller/DeleteController');

const routes = new express.Router(); 
const upload = multer();

routes.post('/posts',upload.single(), PostController.store);
routes.get('/posts', PostController.index);
routes.put('/posts/:id/update', UpdateController.update);
routes.delete('/posts/:id/delete', DeleteController.delete);

module.exports = routes;