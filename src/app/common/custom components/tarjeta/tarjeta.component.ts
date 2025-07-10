import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.scss'],
  imports: [CommonModule]
})
export class TarjetaComponent {
  @Input() materia: any;
  @Input() estado: any;


  showDetails = false;

  // Método para alternar la visibilidad
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }

  StateColors(){
    switch (this.estado) {
      case 'Aprobada':
        return 'text-green-500';
      case 'Cursando':
        return 'text-yellow-500';
      case 'Pendiente':
        return 'text-red-500';
      default:
        return 'text-gray-500';
    }
  }
}
