const express = require("express");
const {getAllTodos, createTodo, getDoneTodos,updateTodo,deleteTodo} = require("../controllers/todos")
const todosRouter = express.Router();

todosRouter.get("/",getAllTodos);
todosRouter.get("/:isCompleted",getDoneTodos);
todosRouter.post("/" , createTodo);
todosRouter.put("/:task",updateTodo);
todosRouter.delete("/:task",deleteTodo);

module.exports = todosRouter;