import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  OnInit,
  ViewChild,
  ViewChildren,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  enteredTitle = '';
  enteredRequest = '';
  //Alternativa para acceder al elemento, usando decorators, en el argumento que recibe va ya sea el nombre de la instancia del componente, la clase o la template variable,
  //@ViewChild('form') form?: ElementRef<HTMLFormElement>;
  //disponible depues de angular 17.3
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  /* El siguiente metodo, lifecycke Hook nos permite acceder a los elementos
  seleciionados por el viewChild, a menos que no se encuentre en el selector
*/

  addTicket = output<{ title: string; request: string }>();

  ngOnInit(): void {
    console.log('On init');
  }

  /* Una vez que tenemos el ElementRef, podemos usar la propiedad nativeElement para manipular el DOM */

  ngAfterViewInit(): void {
    console.log('After view Init');
    console.log(this.form());
    //this.form().nativeElement.innerHTML = "Text"
  }

  onSubmit(title: string) {
    this.addTicket.emit({
      title: title,
      request: this.enteredRequest,
    });
    console.log(this.form()?.nativeElement.reset());
  }
}
