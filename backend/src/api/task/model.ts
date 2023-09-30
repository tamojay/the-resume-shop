import { InferSchemaType, model, Schema } from "mongoose";

const tasksSchema = new Schema(
  {
    title: { type: String, required: true },
    desc: { type: String },
    status: {
      type: String,
      enum: ["queued", "executing", "completed", "pending", "later"],
      required: true,
    },
  },
  { timestamps: true }
);

type Task = InferSchemaType<typeof tasksSchema>;

export default model<Task>("Task", tasksSchema);
