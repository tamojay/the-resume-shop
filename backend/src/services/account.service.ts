"use strict";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import Account from "../models/account.model";

interface SignupPayload {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface LoginPayload {
  email: string;
  password: string;
}

async function registerAccount(payload: SignupPayload) {
  try {
    const hashedPassword = await bcryptjs.hash(payload.password, 8);
    const existingAccount = await Account.findOne({ email: payload.email });
    if (existingAccount) {
      return {
        code: 400,
        msg: "This email address is already registered with another account!",
      };
    }
    const account = new Account({
      firstName: payload.firstName,
      lastName: payload.lastName,
      email: payload.email,
      password: hashedPassword,
    });

    await account.save();

    return {
      code: 201,
      msg: account.toObject(),
    };
  } catch (err: any) {
    console.error("[Service Error] Register account: ", err.message);
    return {
      code: 500,
      msg: `[Service Error] Register account: ${err.message}`,
    };
  }
}

async function login(payload: LoginPayload) {
  try {
    const existingAccount = await Account.findOne({ email: payload.email });
    if (!existingAccount) {
      return {
        code: 400,
        msg: "This email address is not registered!",
      };
    }

    return {
      code: 201,
      msg: existingAccount.toObject(),
    };
  } catch (err: any) {
    console.error("[Service Error] Login: ", err.message);
    return {
      code: 500,
      msg: `[Service Error] Login: ${err.message}`,
    };
  }
}

export const accountService = {
  registerAccount,
  login,
};
