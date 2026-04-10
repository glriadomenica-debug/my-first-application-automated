const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

const start = async () => {
  await testConnection();

  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

start();
