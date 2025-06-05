import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'matriculacion',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(c => c.LoginComponent),
  },
  {
    path: 'select-subject',
    loadComponent: () => import('./pages/select-subject/select-subject.component').then(c => c.SelectSubjectComponent),
  },
  {
    path: 'inscripcion',
    loadComponent: () => import('./inscripcion-examenes/inscripcion-examenes.component').then(c => c.InscripcionExamenesComponent),
  },
   {
    path: 'matriculacion',
    loadComponent: () =>
      import('./pages/matriculacion/matriculacion.component').then(m => m.MatriculacionComponent)
  }
];

