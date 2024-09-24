const express=require('express')
const app=express()
const dbconn=require("./config/db");
const Projects=require('./routes/projectRoute')
require('dotenv').config()
app.use(express.json())

const port=process.env.PORT || 7778
app.use('/projects',Projects)
app.get('/',(req,res)=>{
    res.status(400).json({message:"Welcome"})
})

app.listen(port,()=>{
    console.log(`server runnimg in: ${port}`)
})