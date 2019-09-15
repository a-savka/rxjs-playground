
import { Routes } from '@angular/router';

import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { HomePageComponent } from './containers/home-page/home-page.component';

export const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'notfound',
    component: NotFoundPageComponent
  }
];
