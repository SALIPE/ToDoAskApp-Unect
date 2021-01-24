const Post = require('../models/Post');
const path = require('path');

module.exports = {

    async update(req, res){
        const id = req.params.id;
        const postUpdated = await Post.findByIdAndUpdate(id,{complete:true})
        //caso haja algum erro por algum motivo retornar msg de erro 
        .then(msg =>{
          res.status(200).json(msg)
        })
        .catch(err => { 
          res.status(500).json(err)
        })
        
      req.io.emit('update', postUpdated)
        
      return res.json(postUpdated)
    }

};