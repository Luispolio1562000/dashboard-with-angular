import { Component, ElementRef, ViewChild, ViewChildren, viewChild } from '@angular/core';
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
export class NewTicketComponent {
  enteredTitle = '';
  enteredRequest = '';
  //Alternativa para acceder al elemento, usando decorators, en el argumento que recibe va ya sea el nombre de la instancia del componente, la clase o la template variable,
//@ViewChild('form') form?: ElementRef<HTMLFormElement>;
//disponible depues de angular 17.3
private form = viewChild.required<ElementRef<HTMLFormElement>> ('form')

onSubmit(title: string,) {
    console.log('submit');
    this.enteredTitle = title;
    console.dir(this.enteredTitle);
    console.log(this.enteredRequest);
    console.log(this.form);
 console.log(this.form()?.nativeElement.reset());
 
    

  }
}
