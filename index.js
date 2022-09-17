const express = require("express");
require("dotenv").config();
const cors = require("cors");
const Routes = require("./routes/routes");
const DBConnect = require("./utils/DbConnect");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Running at http://localhost:${PORT}`);
  DBConnect();
  Routes(app);
});
