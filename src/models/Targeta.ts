import mongoose, { Schema  } from "mongoose";

const ticketSchema: Schema = new Schema(
  {
    title: String,
    description: String,
    category: String,
    priority: Number,
    staturs: String,
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const Ticket = mongoose.models.TicketSchema || mongoose.model("TicketSchema", ticketSchema)
export default Ticket


/* export interface IUser {
  _id?: ObjectId | string | undefined;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IUserSchema extends Document {
  _id?: ObjectId | string | undefined;
  email: string;
  password: string;
  createdAt?: string;
  updatedAt?: string;
}
 */