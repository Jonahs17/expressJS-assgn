const express=require('express');

const app=express();

const PORT=5008;
const hostname='localhost'
let value;

app.get('/random',(req,res)=>{
    value=Math.ceil(Math.random()*100);
    res.send(`random: ${value}`);
})

app.listen(PORT,()=>{
    console.log(`Started running at ${hostname}:${PORT}`);
})