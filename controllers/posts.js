const mongoose = require('mongoose');
const PostMessage = require('../models/postMessage')


exports.getAllPosts = async (req, res) => {
    try {
        const allPostMsg = await PostMessage.find();
        res.status(200).json(allPostMsg);
    } catch (error) {
        console.log(error.message);
        res.status(404).json({ msg: error.message })
    }
}






//create posts...

exports.createPosts = async (req, res) => {
    //extract data from the body..


    const { creator, title, message, tags, selectedFile } = req.body;

    //some validation required...

    if (!creator || !title || message || tags || selectedFile) return res.status(400).send(`All fields required!`);


    try {
        const newPost = await PostMessage.create({ creator, title, message, tags, selectedFile });
        //send the response now...
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ msg: error.message })
    }



}


//update posts.....


exports.updatePosts = async (req, res) => {
    //extract data from the body and id from the params....
    const { id: _id } = req.params;

    const post = req.body;

    //some validation...

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        return res.status(404).send(`No post with this id: ${_id}`)
    }




    try {
        const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true });

        //now send the response..
        res.status(200).json(updatedPost);

    } catch (error) {
        console.log(error.message);
        res.status(500).json({ msg: error.message })
    }
}