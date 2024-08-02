import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //status:'online'| 'offline'| 'unknown'| = 'offline';
private destroyRef = inject(DestroyRef)
  status = ['online', 'offline', 'unknown'];
  currentStatus = this.status[Math.floor(Math.random() * this.status.length)];
  //private interval?: ReturnType<typeof setInterval>
  constructor() {}

  //En el siguiente método se comienza el lifecycle del componente, Angular se encarga de inicializar las entradas del componente.
  //Es una practica recomendada usarlo para el trabajo de inicialización, y mantener el constructor delgado.
  ngOnInit() {
   const interval =  setInterval(() => {
      this.currentStatus =
        this.status[Math.floor(Math.random() * this.status.length)];
    }, 5000);


    this.destroyRef.onDestroy(()=>{
clearInterval(interval)
    })
  }

  //Destruye el componente despues de que desaparece de la pantalla, evita fugas de memoria.
  /* ngOnDestroy(): void {
    clearTimeout(this.interval)
  } */
}
