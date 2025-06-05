import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-inscripcion-examenes',
  standalone: true,
  imports: [CommonModule, FormsModule, CheckboxModule, ButtonModule, CardModule],
  templateUrl: './inscripcion-examenes.component.html',
  styleUrls: ['./inscripcion-examenes.component.scss']
})
export class InscripcionExamenesComponent {
  protected exams = [
    { id: 1, name: '2° año-Analisis Matemático', teacher: 'Gómez.M', date: '2025-06-01', rindeLibre: false, selected: false },
    { id: 2, name: '2° año-Probabilidad y estadistica', teacher: 'Gómez.M', date: '2025-06-05', rindeLibre: true, selected: false },
    { id: 3, name: '2° año-EDI II', teacher: 'Gómez.M', date: '2025-06-10', rindeLibre: false, selected: false },
    { id: 4, name: '2° año-Inglés Técnico II', teacher: 'Gómez.M', date: '2025-06-01', rindeLibre: false, selected: false },
    { id: 5, name: '2° año-Base de Datos', teacher: 'Gómez.M', date: '2025-06-05', rindeLibre: true, selected: false },
    { id: 6, name: '2° año-Programacion Orientada a Objetos', teacher: 'Gómez.M', date: '2025-06-10', rindeLibre: false, selected: false },
    {id: 7, name: '2° año-Sistemas Operativos', teacher: 'Gómez.M', date: '2025-06-01', rindeLibre: false, selected: false },
    { id: 8, name: '2° año-Análisis de Sistemas', teacher: 'Gómez.M', date: '2025-06-05', rindeLibre: true, selected: false },
    { id: 9, name: '3° año-Investigacion Operativa', teacher: 'Gómez.M', date: '2025-06-10', rindeLibre: false, selected: false },
    {id: 10, name: '3° año-Economía Empresarial ', teacher: 'Gómez.M', date: '2025-06-01', rindeLibre: false, selected: false },
    { id: 11, name: '3° año- Gestion de Base de Datos ', teacher: 'Gómez.M', date: '2025-06-05', rindeLibre: true, selected: false },
    { id: 12, name: '3° año-Diseño e Implementacion de Sistemas', teacher: 'Gómez.M', date: '2025-06-10', rindeLibre: false, selected: false },
  ];


   onSubmit() {
    const seleccionados = this.exams.filter(e => e.selected);
    alert(`Guardado. Seleccionaste ${seleccionados.length} exams(es).`);
  }
}

