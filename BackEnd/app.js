const express = require("express");
const cors = require("cors");
const app = express();
const feedbackRoute = require("./routes/feedbackRoute");

// Set Middlewares
app.use(express.json());
app.use(cors());

//Add new environment variables to the server
require("dotenv").config();

// Set the database pool global (it is a promise)
global.dbPool = require("./database/mysqlSetup").createPool();

// Routes we have
// --Root
app.get("/", (req, res) => {
  res.send(" HOME Route ");
});
// --Feedback route
app.use("/feedback", feedbackRoute);

// Server listen
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server up and running at port ${port}`);
});
