require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const app = express();
const router = require("./router");

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => {
  console.log("server started", PORT);
});


