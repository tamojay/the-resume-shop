import express from "express";
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello Node!");
});

app.listen(port, () => {
  console.log(`Notes app server listening on port: ${port}`);
});
