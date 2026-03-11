import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: 'alert',
        loadComponent: () => import('./home/alert/alert').then((m) => m.Alert),
        loadChildren: () => import('./home/alert/alert.routes').then((m) => m.alertRoutes),
      },
      {
        path: 'adapter',
        loadChildren: () =>import('./home/adepters/adapter.routes').then((m) => m.routes ),
      },
      {
        path: 'connection',
        loadChildren: () =>import('./home/connection/connection.routes').then((m) => m.routes ),
      },
    ],
  },
];
