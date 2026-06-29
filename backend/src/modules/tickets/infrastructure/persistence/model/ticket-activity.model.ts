import {
  Schema,
  model
} from "mongoose";

export const TicketActivityModel =
  model(
    "TicketActivity",
    new Schema({
      ticketId: String,
      action: String,
      performedBy: String,
      createdAt: Date,
    })
  );