import { Component, input } from '@angular/core';
import { ControlModelData } from './control.model';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css'
})
export class ControlComponent {
 
  inputData = input.required<ControlModelData>()

}
