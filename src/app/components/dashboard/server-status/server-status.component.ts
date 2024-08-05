import {
  Component,
  DestroyRef,
  OnDestroy,
  OnInit,
  effect,
  inject,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //status:'online'| 'offline'| 'unknown'| = 'offline';
  private destroyRef = inject(DestroyRef);
  status: Array<String> = ['online', 'offline', 'unknown'];
  currentStatus = signal<String>(
    this.status[Math.floor(Math.random() * this.status.length)]
  );
  //private interval?: ReturnType<typeof setInterval>
  constructor() {
    /* Nos permite establecer una suscripción a una señal, nos permite ejecutar codigo cada que
    el valor del signal cambia

    Los efectos pueden ser útiles para:

Registro de cambios en los datos
Sincronización de datos con el almacenamiento local
Comportamiento personalizado del DOM (p. ej., cambiar el color de fondo en función de Estado)
Renderizado personalizado (por ejemplo, dibujar en un lienzo cada vez que una señal cambios)
    */
    effect(() => {
      console.log(this.currentStatus());
    });
  }

  //En el siguiente método se comienza el lifecycle del componente, Angular se encarga de inicializar las entradas del componente.
  //Es una practica recomendada usarlo para el trabajo de inicialización, y mantener el constructor delgado.
  ngOnInit() {
    const interval = setInterval(() => {
      this.currentStatus.set(
        this.status[Math.floor(Math.random() * this.status.length)]
      );
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  //Destruye el componente despues de que desaparece de la pantalla, evita fugas de memoria.
  /* ngOnDestroy(): void {
    clearTimeout(this.interval)
  } */
}
