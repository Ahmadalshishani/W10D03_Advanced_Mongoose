const express = require("express");
const db = require("./models/db");
const todosRouter = require("./routes/todos");

const app = express();
app.use(express.json());

app.use("/todos", todosRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});

