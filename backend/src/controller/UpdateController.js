const Post = require('../models/Post');
const path = require('path');

module.exports = {

    async update(req, res){
        const id = req.params.id;
        const post = await Post.findByIdAndUpdate(id,{complete:true})
        
      return res.json(post)
    }

};