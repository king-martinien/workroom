import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: (): Promise<Routes> =>
      import('./features/auth/auth.routes').then((r) => r.authRoutes),
  },
];
