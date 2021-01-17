const Post = require('../models/Post');
const path = require('path');

module.exports = {
    async index(req, res) {
        const posts = await Post.find().sort('-createdAt');

        return res.json(posts);
        
    },

    async store(req, res){
        //console.log(req.body);
        const { todo } = req.body;
        const post = await Post.create({
            todo,
        })
      


        return res.json(post);
    }

};