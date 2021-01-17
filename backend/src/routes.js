//criando rotasd de conexão
const express = require('express');
const PostController = require('./controller/PostController');

const routes = new express.Router(); 

routes.post('/posts', PostController.store);

module.exports = routes;