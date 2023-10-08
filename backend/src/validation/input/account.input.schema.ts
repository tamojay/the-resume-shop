import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, coerceTypes: "array" });
addFormats(ajv);
addErrors(ajv);

const registerInputSchema = {
  type: "object",
  properties: {
    firstName: {
      type: "string",
      minLength: 1,
    },
    lastName: {
      type: "string",
      minLength: 1,
    },
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      minLength: 8,
    },
    accountType: {
      type: "string",
      enum: ["individual", "organisation"],
    },
  },
  required: ["firstName", "lastName", "email", "password"],
};

const loginInputSchema = {
  type: "object",
  properties: {
    email: {
      type: "string",
      format: "email",
    },
    password: {
      type: "string",
      minLength: 8,
    },
  },
  required: ["email", "password"],
};

const signupValidate = ajv.compile(registerInputSchema);
const loginValidate = ajv.compile(loginInputSchema);

export const accountInputValidate = {
  signupValidate,
  loginValidate,
};
