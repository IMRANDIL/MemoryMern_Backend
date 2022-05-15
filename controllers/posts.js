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

    const post = req.body;

    try {
        const newPost = await PostMessage.create(post);
        //send the response now...
        res.status(201).json(newPost)
    } catch (error) {
        console.log(error.message);
        res.status(409).json({ msg: error.message })
    }



}