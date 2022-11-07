const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./room/roomRoutes')
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json())

app.use('/room',roomRoutes)

app.use((error, req, res, next)=>{
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'an unknown error occured'})
})

mongoose.connect('mongodb+srv://meahana_admin:xEWiKe6cqqJKMfM8@devcluster.cfmirdo.mongodb.net/test')
app.listen(5000);   

