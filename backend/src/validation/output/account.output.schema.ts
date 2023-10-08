import Ajv from "ajv";
import addErrors from "ajv-errors";
import addFormats from "ajv-formats";

const ajv = new Ajv({ allErrors: true, coerceTypes: "array" });
addFormats(ajv);
addErrors(ajv);

const accountOutputSchema = {
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
      default: "individual",
    },
  },
  required: ["firstName", "lastName", "email", "accountType"],
};

const accountOutputValidate = ajv.compile(accountOutputSchema);

export default accountOutputValidate;
