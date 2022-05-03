const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
});

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
});

app.get('/about',(req,res)=>{
    res.json({page: 'about'});
});

app.get('/contact',(req,res)=>{
    res.send(__dirname);
});