const express=require('express');
const Todo =require('../models/todo');
const router =express.Router();

router.post('/',async(req,res)=>{
    try{
        const todo=new Todo({
            title:req.body.title,
            description:req.body.description,
            completed:req.body.completed
        });
        const savedTodo=await todo.save();
        res.status(201).json(savedTodo);

    }catch(err){
        res.status(400).json({message:err.message});
    }
});

router.get('/', async (req, res) => {
  try {
      const todos = await Todo.find();
      res.json(todos); 
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});

    router.patch('/:id', async (req, res) => {
      try {
        const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTodo) return res.status(404).json({ message: 'ToDo not found' });
        res.json(updatedTodo); 
      } catch (err) {
        res.status(400).json({ message: err.message });
      }
    });

    router.delete('/:id', async (req, res) => {
      try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) return res.status(404).json({ message: 'ToDo not found' });
        res.json({ message: 'ToDo deleted successfully' }); 
      } catch (err) {
        res.status(500).json({ message: err.message });
      }
    });
    
    module.exports = router;  