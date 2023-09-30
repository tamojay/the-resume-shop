import app from "./app";
import env from "./util/validateEnv";
import mongoose from "mongoose";

const { PORT, MONGO_URL } = env;

mongoose
  .connect(MONGO_URL!)
  .then(() => {
    console.log("Connection successful!!");
    app.listen(PORT, () => {
      console.log(`Notes app server listening on port: ${PORT}`);
    });
  })
  .catch(console.error);
