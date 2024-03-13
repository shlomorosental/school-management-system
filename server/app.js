const express = require("express");
const {pool, checkDBConnection} = require("./db.js");
const courses = require("./router/courses.js")
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());
// app.use(express.json());

app.use('/api/courses',courses)

const port = process.env.PORT || 5000;

app.listen(port, async () => {
  const dbConnection = await checkDBConnection();
  if (dbConnection) {
    console.log(`Server running on port ${port}`);
  }
});
