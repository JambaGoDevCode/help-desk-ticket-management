import {
  Schema,
  model
} from "mongoose";

export const TicketModel =
  model(
    "Ticket",
    new Schema(
      {
        companyId: String,
        ticketNumber: String,

        title: String,
        description: String,

        status: String,
        priority: String,
        type: String,

        requesterId: String,
        assignedTo: String,

        createdAt: Date,
        updatedAt: Date,
      },
      {
        timestamps: true,
      }
    )
  );