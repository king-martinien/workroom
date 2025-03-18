import { Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { Type } from '@angular/core';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'login',
        loadComponent: (): Promise<Type<any>> => import('./pages/login/login.component')
          .then((c) => c.LoginComponent)
      },
      {
        path: 'forgot-password',
        loadComponent: (): Promise<Type<any>> => import('./pages/forgot-password/forgot-password.component')
          .then((c) => c.ForgotPasswordComponent)
      }
    ]
  }
];
