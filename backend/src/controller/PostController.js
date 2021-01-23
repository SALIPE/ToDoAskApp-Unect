const Post = require('../models/Post');
const path = require('path');

module.exports = {
    async index(req, res) {
        const todoPosts = await Post.find({complete: false}).sort('-createdAt');

        return res.json(todoPosts);
        
    },
    async completed(req, res){
        const completePosts = await Post.find({complete: true}).sort('-createdAt');

        return res.json(completePosts);
    },
    async showAll(req, res){
        const showPosts = await Post.find().sort('-createdAt');

        return res.json(showPosts);
    },

    async store(req, res){
        //console.log(req.body);
        const { todo } = req.body;
        const post = await Post.create({
            todo,
        })

        req.io.emit('post', post)
        return res.json(post)
    }

};

//,, .-.  ..  ;-;