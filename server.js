const express = require('express');
const res = require('express/lib/response');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: false}));

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

app.post("/login",(req,res)=>{
    const {username, password} = req.body;
    console.log(username, password);
    if(username === 'user1' && password === '1234') res.send(`Welcome ${username}`)
    else res.send('LOGIN FAILED');
});