const Post = require('../models/Post');

module.exports = {

    async delete(req, res){
        const id = req.params.id;
        //terminar falta conseguir alterar o valor, ja consegue selecionar via id
        const post = await Post.findByIdAndDelete(id)

        

      
      return res.json({"deletado": true})
    }

};