const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const port = 5000 || process.env.PORT
mongoose.connect(process.env.DB);
const cors = require('cors');

const app = express();

const db=mongoose.connection;
const corsOptions ={
    origin:['http://localhost:3000' , 'https://krushna-porfolio.web.app', 'https://eticket-connect.web.app'], 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}

app.use(cors(corsOptions))
db.on('error' , (error)=>
{
    console.log(error);
})
db.once('open' , ()=>
{
    console.log("Connection Succesfull with MongoDB Atlas !");
})

app.use(express.json());

app.get('/', (req, res) => {res.send('Welcome to Blog API')});
const blogRoute = require('./routes/blogRoute');
app.use('/blog', blogRoute);

app.listen(port, ()=>{
    console.log(`App listed on port http://localhost:5000`);
});
