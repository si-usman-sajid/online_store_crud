const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const orderRouter = require("./routes/orderRoutes");

app.use(express.json({ limit: "500mb" }));

app.get("/", (req, res) => {
  res.send("Welcome to the express");
});
app.use("/order", orderRouter);

mongoose.connect("mongodb://localhost:27017/store").then((err, db) => {
  console.log("DB Connected");
});

app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
