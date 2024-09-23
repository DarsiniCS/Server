const express=require('express')
const app=express()

require('dotenv').config()

const port=process.env.PORT || 7778

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"Welcome"})
})

app.listen(port,()=>{
    console.log('server runnimg in: ${port}')
})