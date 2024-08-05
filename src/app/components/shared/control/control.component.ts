import {
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  HostBinding,
  HostListener,
  ViewEncapsulation,
  afterNextRender,
  afterRender,
  contentChild,
  inject,
  input,
} from '@angular/core';
import { ControlModelData } from './control.model';
import { AfterViewInit } from '@angular/core';

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
  },
})
export class ControlComponent {
  constructor(){
    /* Estas funciones se declaran exclusivamente en el constructor,reciben una función como
     argumento
    */


    afterRender(()=> {

      /* Se ejecuta cada vez que algo cambia en cualquier lugar de la
      aplicación
      */
      console.log('after render');

    });
    afterNextRender(()=> {
      /* Despues del proximo cambio en toda la apliación  */
      'AfterNextRender'
    })
  }




/* Nos permite acceder al elemento seleccionado, y a sus distintas opciones de configuración del elemento. En caso de ser mas de un elemento
se utiliza @ContentChildren
*/

  /*

  @ContentChild('input') private control?: ElementRef<
    HTMLInputElement | HTMLTextAreaElement
  >; */



  //Nos permite agregar atributos, en el parentesis va el nombre del atributo que se quiere anadir.
  //No se recomienda, ya que es de uso en el pasado.

  /* @HostListener('click') onCLick() {
    console.log('click');

  @HostBinding('class') className = 'control';
  }*/

  /* Representan la estructura y el contenido del Documento. */

  control = contentChild < ElementRef <HTMLInputElement | HTMLTextAreaElement>>('input')

  inputData = input.required<ControlModelData>();
  private el = inject(ElementRef);
  onClick() {
    console.log(this.el);
    console.log(this.control());
  }
}
