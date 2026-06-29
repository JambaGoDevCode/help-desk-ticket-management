import {
  Schema,
  model
} from "mongoose";

export const TicketMessageModel =
  model(
    "TicketMessage",
    new Schema({
      ticketId: String,
      senderId: String,
      content: String,
      createdAt: Date,
    })
  );