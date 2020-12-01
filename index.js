require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = process.env.PORT || 6003;

const employeesRouter = require("./routes/employees");

app.use(express.json());
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use("/api/employees", employeesRouter);

app.listen(PORT, () => {
  console.log(`Success running server on port ${PORT}`);
});
