const express = require('express')
const fs = require('fs')
const app = express()

let todos =[]
let id = 1

app.get("/",(req,res)=>{
    res.send("Hello")
})
console.log(todos)
app.get("/v1/todos",async(req,res)=>{
    try {
        res.json(todos)
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
})
app.post("/v1/todos",async(req,res)=>{
    const { todo } = req.body;
    try{
        const newTodo = new todos({id:id+1,todo})
         todos.push(newTodo);
        res.status(201).json(newTodo);

    }catch(error){
        res.status(500).json({error:"Internal Server error"})
    }
})
const PORT = 3000
app.listen(PORT,()=>{
console.log(`Server is running on ${PORT}`)
})