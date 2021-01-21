const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    todo:{
        type: String,
        required : true,
    },complete:{
        type: Boolean,
        default: false,
    }
},{
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema);