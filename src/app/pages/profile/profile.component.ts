import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { TarjetaComponent } from '../../common/custom components/tarjeta/tarjeta.component';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    TarjetaComponent, 
    FormsModule,
    ButtonModule,
    PasswordModule,
    IconFieldModule,
    InputIconModule,
    CardModule,
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})


export class profileComponent {
      protected Subjects = [
  { id: 1, name: 'Analisis Matemático', year: 2, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 2, name: 'Probabilidad y estadistica', year: 2, rindeLibre: true, selected: false, estado: 'Pendiente' },
  { id: 3, name: 'EDI II', rindeLibre: false, year: 2, selected: false, estado: 'Cursando' },
  { id: 4, name: 'Inglés Técnico II', year: 2, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 5, name: 'Base de Datos', year: 2, rindeLibre: true, selected: false, estado: 'Pendiente' },
  { id: 6, name: 'Programacion Orientada a Objetos', year: 2, rindeLibre: false, selected: false, estado: 'Cursando' },
  { id: 7, name: 'Sistemas Operativos', year: 2, rindeLibre: false, selected: false, estado: 'Pendiente' },
  { id: 8, name: 'Análisis de Sistemas', year: 2, rindeLibre: true, selected: false, estado: 'Cursando' },
  { id: 9, name: 'Investigacion Operativa', year: 3, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 10, name: 'Economía Empresarial ', year: 3, rindeLibre: false, selected: false, estado: 'Cursando' },
  { id: 11, name: 'Gestion de Base de Datos ', year: 3, rindeLibre: true, selected: false, estado: 'Pendiente' },
  { id: 12, name: 'Diseño e Implementacion de Sistemas', year: 3, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 13, name: 'Análisis Matemático I', year: 1, rindeLibre: false, selected: false, estado: 'Cursando' },
  { id: 14, name: 'Sistemas de Computación', year: 1, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 15, name: 'Álgebra ', year: 1, rindeLibre: false, selected: false, estado: 'Pendiente' },
  { id: 16, name: 'Inglés Técnico ', year: 1, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 17, name: 'Metodología de la Investigación ', year: 1, rindeLibre: false, selected: false, estado: 'Cursando' },
  { id: 18, name: 'Administración de las Organizaciones ', year: 1, rindeLibre: false, selected: false, estado: 'Pendiente' },
  { id: 19, name: 'EDI I ', year: 1, rindeLibre: false, selected: false, estado: 'Aprobada' },
  { id: 20, name: 'Programación I', year: 1, rindeLibre: false, selected: false, estado: 'Cursando' },
];


    get subjectsByYear() {
    const grouped: { [year: number]: any[] } = {};
    for (const subject of this.Subjects) {
      if (!grouped[subject.year]) {
        grouped[subject.year] = [];
      }
      grouped[subject.year].push(subject);
    }
    return grouped;
  }

  get subjectsByYearKeys(): number[] {
    return Object.keys(this.subjectsByYear).map(Number).sort();
  }


}
