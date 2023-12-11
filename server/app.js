const express = require("express");
import { checkDBConnection } from "./db.js";
const app = express();

app.use(express.json());

const cors = require("cors");
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  const dbConnection = await checkDBConnection();
  if (dbConnection) {
    console.log(`Server running on port ${port}`);
  }
});
