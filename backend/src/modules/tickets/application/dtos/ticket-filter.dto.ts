export interface TicketFilterDto {
  status?: string;
  priority?: string;
  assignedTo?: string;
  requesterId?: string;
  companyId?: string;

  page?: number;
  limit?: number;

  search?: string;
}