import { Component, input, signal } from '@angular/core';
import type { TicketsModel } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css',
})
export class TicketComponent {
  ticketData = input.required<TicketsModel>();
  detailsVisible = signal(false);
}
