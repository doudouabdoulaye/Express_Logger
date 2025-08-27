const express = require("express");
const app = express();
const PORT = 3000;


// logger middleware
app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname, req.path, req.time);
    next();
});

// Middleware JSON
app.use(express.json());

// Importer les routes
const tasksRouter = require("./routes/tasks");

// Préfixe /tasks
app.use("/tasks", tasksRouter);

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}/tasks`);
});
