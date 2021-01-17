const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    todo: String,
},{
    timestamps: true,
}
);

module.exports = mongoose.model('Post', PostSchema);