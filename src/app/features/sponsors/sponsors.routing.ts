import { Routes } from '@angular/router';
import { SponsorsListComponent } from './sponsors.barrel';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SponsorsListComponent
  }
];
