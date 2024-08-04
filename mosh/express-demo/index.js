const express = require("express");

const app = express();

const courses = [
  { id: 1, name: "python for beginner" },
  { id: 2, name: "golang for beginner" },
  { id: 3, name: "mern stack for beginner" },
  { id: 4, name: "reactjs for beginner" },
];

app.get("/", (req, res) => {
  res.send("Hello Express hola");
});

app.get("/api/courses", (req, res) => {
  res.send(courses);
});

app.get("/api/courses/:id", (req, res) => {
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) {
    res.status(404).send("the course does not exists");
  }
  res.send(course);
});

// reading param both query and normal
// app.get("/api/course/:id/:year", (req, res) => {
//   res.send(req.params);
//   // to send query parameters
//   // res.send(req.query);
// });

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}...`));
