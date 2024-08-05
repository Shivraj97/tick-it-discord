const express = require("express");
const mongoose = require("mongoose");

const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  });

export default app;
