import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
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
    path: 'profile',
    loadComponent: () => import('./pages/profile/profile.component').then(c => c.profileComponent),
  }
];
