import { Component, input } from '@angular/core';
import type { DashboardModel } from './dasboard.model';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
dataItem = input.required<DashboardModel>()


}
