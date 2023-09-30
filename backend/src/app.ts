import "dotenv/config";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Node and TS!");
});

export default app;
