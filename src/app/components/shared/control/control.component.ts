import {
  Component,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';
import { ControlModelData } from './control.model';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()',
  } 
})
export class ControlComponent {
  //Nos permite agregar atributos, en el parentesis va el nombre del atributo que se quiere anadir.
  //No se recomienda, ya que es de uso en el pasado.

  /* @HostListener('click') onCLick() {
    console.log('click');
  
  @HostBinding('class') className = 'control';
  }*/ 
  
  inputData = input.required<ControlModelData>();
private el = inject(ElementRef)
  onClick() {
    console.log('Click');
    console.log(this.el);
    
  }
}
