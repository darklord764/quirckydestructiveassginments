const express = require('express');
   const bodyParser = require('body-parser');
   const app = express();
   const fs = require ("fs");
   const { parse } = require('path');
   app.use(bodyParser.json());
   
   
   
   let todos = [];
   
   function findId( arr , id ){
     let foundIndex = -1
     arr.forEach((element , index) => {
       element.id === id ? foundIndex = index : null     
      });
      
      return foundIndex;
    }
    
    
    app.get("/todos", (req, res) => {
      fs.readFile("./atodos.json", "utf-8", (err, data) => {
        if (err) throw err;
    
        const todos = JSON.parse(data);
        res.status(200).json(todos);
      });
    });
    
    app.get("/todos/:id", (req, res) => {
      fs.readFile("./atodos.json", "utf-8", (err, data) => {
        if (err) throw err;
    
        const todos = JSON.parse(data);
        let index = findId(todos, parseInt(req.params.id));
        index === -1 ? res.status(404).send() : res.status(200).json(todos[index]);
      });
    });

    
app.post("/todos", (req, res) => {
  const userData = req.body;

  fs.readFile("./atodos.json", "utf-8", (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    const maxId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;

    const newTodo = {
      id: maxId + 1,
      ...userData,
    };

    todos.push(newTodo);

    // Serialize todos to JSON string before writing to file
    const serializedTodos = JSON.stringify(todos);

    fs.writeFile("./atodos.json", serializedTodos, "utf-8", (err) => {
      if (err) throw err;
      res.status(201).json(newTodo);
    });
  });
});



app.put("/todos/:id", (req, res) => {
  fs.readFile("./atodos.json", "utf-8", (err, data) => {
    if (err) throw err;

    const todos = JSON.parse(data);
    let id = parseInt(req.params.id);
    let index = findId(todos, id);

    if (index === -1) {
      res.status(404).send();
    } else {
      const updatedTodo = {
        id,
        ...req.body,
      };

      todos[index] = updatedTodo;

      // Serialize todos to JSON string before writing to file
      const serializedTodos = JSON.stringify(todos);

      fs.writeFile('./atodos.json', serializedTodos, 'utf-8', (err) => {
        if (err) throw err;
        res.status(200).send();
      });
    }
  });
});

    app.delete("/todos/:id" , (req , res)=>{
      fs.readFile("./atodos.json" , "utf-8" , (err, data)=>{
        if(err) throw err;
        const todos = JSON.parse(data);
        let index = findId( todos , parseInt(req.params.id))
        if (index === -1) {
          res.status(404).send();
        } else {
      todos.splice(index , 1)
      fs.writeFile("./atodos.json" , JSON.stringify(todos) , "utf-8" , (err)=>{
      res.status(200).send();
      }
      )}
    })  
})

    const port = 4000;
    app.listen(port , ()=>{
      console.log(`Listening on port ${port}`);
    })