
import { Routes } from '@angular/router';

import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { SwicthMapComponent } from './pages/switch-map/switch-map.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';
import { ConcatMapComponent } from './pages/concat-map/concat-map.component';
import { CombineAllComponent } from './pages/combine-all/combine-all.component';

export const routes: Routes = [
  {
    path: 'playground',
    children: [
      {
        path: 'combine-latest',
        component: CombineLatestComponent
      },
      {
        path: 'switch-map',
        component: SwicthMapComponent
      },
      {
        path: 'merge-map',
        component: MergeMapComponent
      },
      {
        path: 'combine-all',
        component: CombineAllComponent
      },
      {
        path: 'concat-map',
        component: ConcatMapComponent
      }
    ]
  }
]
