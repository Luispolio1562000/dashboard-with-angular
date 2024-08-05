import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { TicketsModel } from './ticket.model';
import { TicketComponent } from "./ticket/ticket.component";

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  tickets: TicketsModel[] = [];

  onAdd(ticketData: { title: string; request: string }) {
    const ticket: TicketsModel = {
      id: Math.random().toString() ,
      title: ticketData.title,
      request: ticketData.request,
      status: 'open',
    }
    this.tickets.push(ticket);
  }
}
