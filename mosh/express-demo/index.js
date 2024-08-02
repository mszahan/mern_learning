const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.get("/api/courses", (req, res) => {
  res.send(["python", "nodejs", "golang"]);
});

app.listen(3000, () => console.log("listening on port 3000..."));
