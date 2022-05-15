require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//some middlewares..

app.use(cors());

app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ extended: true, limit: '30mb' }));



//route middleware...

app.use('/posts', require('./routes/posts'))








//listen on some port...

const PORT = process.env.PORT || 3000;


//database connection....

mongoose.connect(process.env.URI).then(() => {
    console.log('database connected😄');
    app.listen(PORT, () => {
        console.log(`server runs on port : ${PORT}`);
    })
}).catch((err) => {
    console.log(err.message);
    process.exit(1);
});





