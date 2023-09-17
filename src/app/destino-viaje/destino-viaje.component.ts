import { Component, Input, HostBinding } from '@angular/core';
import { DestinoViaje } from '../models/destino-viaje.model';

@Component({
  selector: 'app-destino-viaje',
  templateUrl: './destino-viaje.component.html',
  styleUrls: ['./destino-viaje.component.css']
})
export class DestinoViajeComponent {
  @Input() destino!: DestinoViaje;
  @HostBinding('class') cssClass = 'col-md-4 pb-4';
  constructor() {
    
  }

  ngOnInit() {
    // ...
  }
}
