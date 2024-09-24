const mongoose=require('mongoose')
mongoose.connect(process.env.MONGOURL || "mongodb+srv://admin:darsinics1718@in-aws.l3xuo.mongodb.net/Project-Mern?retryWrites=true&w=majority&appName=IN-AWS")
const connection=mongoose.connection;
connection.on('connected',() =>
{
    console.log("DB Connected")

})
connection.on('error',() => console.log("DB Error"))
module.exports=mongoose