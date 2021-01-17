//criando rotasd de conexão
const express = require('express');
const multer = require('multer');
const PostController = require('./controller/PostController');

const routes = new express.Router(); 
const upload = multer();

routes.post('/posts',upload.single(), PostController.store);
routes.get('/posts', PostController.index);

module.exports = routes;