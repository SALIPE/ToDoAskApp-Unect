const Post = require('../models/Post');

module.exports = {

    async delete(req, res){
        const id = req.params.id;
        const postDelete = await Post.findByIdAndDelete(id)
        //caso haja algum erro por algum motivo retornar msg de erro 
        .then(msg =>{
          res.status(200).json(msg)
        })
        .catch(err => { 
          res.status(500).json(err)
        })
        
      return res.json({"deletado": true})
    }

};