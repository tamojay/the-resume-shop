import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import compression from "compression";

const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello Node and TS!");
});

export default app;
