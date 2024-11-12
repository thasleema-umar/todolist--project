const mongoose = require('mongoose');
const todoschema = new mongoose.Schema({
    title:{type:String,required:true},
    description:String,
    
});
module.exports= mongoose.model('Todo',todoschema);
