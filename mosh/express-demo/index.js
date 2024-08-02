const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express hola");
});

app.get("/api/courses", (req, res) => {
  res.send(["python", "nodejs", "golang"]);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
