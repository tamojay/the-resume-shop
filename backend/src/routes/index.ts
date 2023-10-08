import express from "express";
import accountRoute from "./account.route";

const appRouter = express.Router();

appRouter.use("/account", accountRoute);

export default appRouter;
