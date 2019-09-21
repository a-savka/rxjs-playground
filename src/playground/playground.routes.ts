
import { Routes } from '@angular/router';

import { childRoutes } from './pages';

export const routes: Routes = [
  {
    path: 'playground',
    children: [ ...childRoutes ]
  }
];
