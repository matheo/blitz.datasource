import { Routes } from '@angular/router';
import { LayoutBodyComponent } from './layout';

export const routes: Routes = [
  {
    path: '',
    component: LayoutBodyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'sponsors'
      },
      {
        path: 'sponsors',
        loadChildren: () => import('./features/sponsors/sponsors.module').then(m => m.FeatSponsorsModule)
      }
    ]
  }
];
