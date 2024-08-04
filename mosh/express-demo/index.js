const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express hola");
});

app.get("/api/courses", (req, res) => {
  res.send(["python", "nodejs", "golang"]);
});

// reading param both query and normal

app.get("/api/course/:id/:year", (req, res) => {
  res.send(req.params);
  // to send query parameters
  // res.send(req.query);
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
