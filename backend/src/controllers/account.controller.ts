"use strict";

import { Request, Response } from "express";
import { accountInputValidate } from "../validation/input/account.input.schema";
import accountOutputValidate from "../validation/output/account.output.schema";
import { accountService } from "../services/account.service";

async function registerAccount(req: Request, res: Response) {
  try {
    let payload = req.body;

    // Input validation
    const isInputValid = accountInputValidate.signupValidate(payload);
    if (!isInputValid) {
      res.status(400).json("Bad Request: Input validation failed!");
      return;
    }

    let accountResponse = await accountService.registerAccount(payload);

    if (accountResponse.code === 201) {
      // Output validation
      const isOutputValid = accountOutputValidate(accountResponse.msg);
      if (!isOutputValid) {
        res.status(400).json("Bad Request: Output validation failed!");
        return;
      }
    }
    res.status(accountResponse.code).json(accountResponse.msg);
  } catch (err: any) {
    console.error("[Controller Error] Register account: ", err.message);
    return;
  }
}

export const accountController = {
  registerAccount,
};
