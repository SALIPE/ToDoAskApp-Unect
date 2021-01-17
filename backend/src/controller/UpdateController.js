const Post = require('../models/Post');
const path = require('path');

module.exports = {

    async update(req, res){
        const id = req.params.id;
        //terminar falta conseguir alterar o valor, ja consegue selecionar via id
        const post = await Post.findByIdAndUpdate(id)

         

      
      return res.json(post)
    }

};