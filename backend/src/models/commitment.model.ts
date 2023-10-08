import { InferSchemaType, model, Schema } from "mongoose";

const tasksSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    status: {
      type: String,
      enum: ["queued", "executing", "fulfiled", "pending", "later", "expired"],
      required: true,
    },
    createdAt: { type: Date, required: true, default: Date.now() },
    lastUpdatedAt: { type: Date, required: true, default: Date.now() },
  },
  { timestamps: true }
);

type Commitments = InferSchemaType<typeof tasksSchema>;

export default model<Commitments>("Commitments", tasksSchema, "Commitments");
