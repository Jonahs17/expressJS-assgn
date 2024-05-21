const express=require('express');

const app=express();
const PORT=5006;
const hostname='localhost'
let counter=0;
app.get('/',(req,res)=>{
    res.send(`Counter:${counter} `);
});
app.get('/increment',(req,res)=>{
    counter++;
    res.send(`Counter:${counter}`);
});
app.get('/decrement',(req,res)=>{
    counter--;
    res.send(`Counter:${counter} `);
});
app.listen(PORT,()=>{
    console.log(`Server running at ${hostname}:${PORT}`);
})