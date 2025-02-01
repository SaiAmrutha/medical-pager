const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require("dotenv").config();

app.use(cors()); //this makes us in using cross origin requests
app.use(express.json()); //this will allow us to pass json payloads from the frontend to the backend
app.use(express.urlencoded()); //this is a built in middleware function in express

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/auth", authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
