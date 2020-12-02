require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 6003;

const employeesRouter = require("./routes/employees");
const reverseRouter = require("./routes/reverse");
const fibonacciRouter = require("./routes/fibonacci");
const combinationRouter = require("./routes/combination");

app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/api/employees", employeesRouter);
app.use("/api/reverse", reverseRouter);
app.use("/api/fibonacci", fibonacciRouter);
app.use("/api/combination", combinationRouter);

app.listen(PORT, () => {
  console.log(`Success running server on port ${PORT}`);
});
