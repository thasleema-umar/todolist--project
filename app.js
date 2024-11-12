const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todosRoutes = require('./routes/todos');
const app=express();
const path = require('path')
require('dotenv').config();
mongoose.connect('mongodb+srv://thasle:thaslee@cluster0.wo6tz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>console.log('connected to MongoDB'))
.catch((err)=>console.error('database connection error:',err));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:true}));app.use('/todos', todosRoutes);

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  });

const PORT = process.env.PORT||6500;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
});