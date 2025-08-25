const express = require('express')
const fs = require('fs')
const app = express()
const Task = require('./Task')

const fileJson = fs.readFileSync(Task)
console.log(fileJson)

app.get("/",(req,res)=>{
    res.send("Hello")
})
console.log(Task)
app.get("/v1/tasks",async(req,res)=>{
    try {
        const tasks = await Task.find()
        console.log(tasks)
        res.json(tasks)
    } catch (error) {
        res.status(500).json({error:"Internal Server error"})
    }
})

const PORT = 3000
app.listen(PORT,()=>{
console.log(`Server is running on ${PORT}`)
})