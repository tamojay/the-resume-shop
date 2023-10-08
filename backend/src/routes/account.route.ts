import express from "express";
import { accountController } from "../controllers/account.controller";

const router = express.Router();

router.post("/signup", accountController.registerAccount);

export default router;
