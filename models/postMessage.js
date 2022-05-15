const mongoose = require('mongoose');


const postSchema = mongoose.Schema({
    title: String,
    messaage: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likedCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
});


module.exports = mongoose.model('PostMessage', postSchema);