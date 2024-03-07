const todoModel = require("../models/todosSchema");
//---------Q1------------
const createTodo = (req, res) => {
    const {task , description,deadline,isCompleted,priority} = req.body;
    const newTodo = new todoModel ({task,description,deadline,isCompleted,priority})
    newTodo.save()
    .then((result)=>{
        console.log(result);
        res.json(result.task)
    }).catch((err)=>{
        res.status(401).json({error :err})
    })
};
// ------Q3-----------
const getAllTodos = (req,res)=>{
    todoModel.find({})
    .then((result)=>{
        console.log(result);
        res.json(result)
    }).catch((err)=>{
        res.status(401).json(err)
    })
}

//-----Q4----------
const getDoneTodos = (req,res)=>{

  const {isCompleted} = req.params;
    console.log(isCompleted);
    todoModel.find({isCompleted})
    .then((result)=>{
        console.log(result);
        res.json(result)
    }).catch((err)=>{
        res.status(401).json(err)
    })
} 
const updateTodo = (req, res) => {
    const {task} = req.params
    console.log(task);
    const {isCompleted} = req.body
    console.log(isCompleted);
    todoModel.findOneAndUpdate(task,isCompleted,{new : true}) 
    .then((result)=>{
        console.log(result);
        res.json(result);
    }).catch((err)=>{
        res.status(401).json(err)
    })
};
const deleteTodo = (req, res) => {
    const {task} = req.params
    todoModel.deleteOne({task})
    .then((result)=>{
        console.log(result);
    }).catch((err)=>{
        res.status(401).json(err)
    })
};

module.exports = {
  createTodo,
  getAllTodos,
  updateTodo,
  deleteTodo,
  getDoneTodos,
  
};