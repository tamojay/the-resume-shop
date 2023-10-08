import { InferSchemaType, model, Schema } from "mongoose";

const accountSchema = new Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    accountType: {
      type: String,
      enum: ["individual", "organisation"],
      default: "individual",
      required: true,
    },
    createdAt: { type: Date, required: true, default: Date.now() },
  },
  { timestamps: true }
);

type Accounts = InferSchemaType<typeof accountSchema>;

export default model<Accounts>("Account", accountSchema, "Accounts");
