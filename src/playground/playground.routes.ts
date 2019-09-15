
import { Routes } from '@angular/router';

import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';

export const routes: Routes = [
  {
    path: 'playground',
    children: [
      {
        path: 'combine-latest',
        component: CombineLatestComponent
      }
    ]
  }
]
