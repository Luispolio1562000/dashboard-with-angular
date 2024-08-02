import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  //status:'online'| 'offline'| 'unknown'| = 'offline';

  status = ['online', 'offline', 'unknown'];
  currentStatus = this.status[Math.floor(Math.random() * this.status.length)];

  constructor() {}

  //En el siguiente método se comienza el lifecycle del componente, Angular se encarga de inicializar las entradas del componente.
  //Es una practica recomendada usarlo para el trabajo de inicialización, y mantener el constructor delgado.
  ngOnInit() {
    setInterval(() => {
      this.currentStatus =
        this.status[Math.floor(Math.random() * this.status.length)];
    }, 5000);
  }
}
