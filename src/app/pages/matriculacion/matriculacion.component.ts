import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-matriculacion',
  standalone: true,
  imports: [CommonModule,FormsModule,CardModule,CheckboxModule,ButtonModule],
  templateUrl: './matriculacion.component.html',
  styleUrls: ['./matriculacion.component.scss']
})

export class MatriculacionComponent {
  protected Subjects = [
    { id: 1, name: 'Analisis Matemático', year: 2, rindeLibre: false, selected: false },
    { id: 2, name: 'Probabilidad y estadistica',year: 2, rindeLibre: true, selected: false },
    { id: 3, name: 'EDI II', rindeLibre: false, year: 2, selected: false },
    { id: 4, name: 'Inglés Técnico II', year: 2,rindeLibre: false, selected: false },
    { id: 5, name: 'Base de Datos', year: 2, rindeLibre: true, selected: false },
    { id: 6, name: 'Programacion Orientada a Objetos', year: 2, rindeLibre: false, selected: false },
    {id: 7, name: 'Sistemas Operativos', year: 2, rindeLibre: false, selected: false },
    { id: 8, name: 'Análisis de Sistemas', year: 2, rindeLibre: true, selected: false },
    { id: 9, name: 'Investigacion Operativa', year: 3, rindeLibre: false, selected: false },
    {id: 10, name: 'Economía Empresarial ', year: 3, rindeLibre: false, selected: false },
    { id: 11, name: 'Gestion de Base de Datos ', year: 3, rindeLibre: true, selected: false },
    { id: 12, name: 'Diseño e Implementacion de Sistemas', year: 3, rindeLibre: false, selected: false },
    { id: 13, name: 'Análisis Matemático I', year: 1, rindeLibre: false, selected: false },
    { id: 14, name: 'Sistemas de Computación', year: 1, rindeLibre: false, selected: false },
    { id: 15, name: 'Álgebra ', year: 1, rindeLibre: false, selected: false },
    { id: 16, name: 'Inglés Técnico ', year: 1, rindeLibre: false, selected: false },
    { id: 17, name: 'Metodología de la Investigación ', year: 1, rindeLibre: false, selected: false },
    { id: 18, name: 'Administración de las Organizaciones ', year: 1, rindeLibre: false, selected: false },
    { id: 19, name: 'EDI I ', year: 1, rindeLibre: false, selected: false },
    { id: 20, name: 'Programación I', year: 1, rindeLibre: false, selected: false },
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

 onSubmit() {
    const seleccionados = this.Subjects.filter(s => s.selected);
    alert(`Guardado. Seleccionaste ${seleccionados.length} subject(s).`);
}
}
