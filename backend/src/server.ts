import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";
import http from "http";

const { PORT, MONGO_URL } = env;

const server = http.createServer(app);

mongoose
  .connect(MONGO_URL!)
  .then(() => {
    console.log("Connection successful!!");
    server.listen(PORT, () => {
      console.log(`Notes app server listening on port: ${PORT}`);
    });
  })
  .catch(console.error);
