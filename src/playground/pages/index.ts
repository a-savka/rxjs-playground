
import { Routes } from '@angular/router';

import { PageDefinition } from './page-definition.model';

import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { SwicthMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ConcatMapComponent } from './concat-map/concat-map.component';
import { CombineAllComponent } from './combine-all/combine-all.component';
import { ForkJoinComponent } from './fork-join/fork-join.component';

export const childRoutes: Routes = [
  {
    path: 'combine-latest',
    data: {
      title: 'combineLatest'
    },
    component: CombineLatestComponent
  },
  {
    path: 'switch-map',
    data: {
      title: 'switchMap'
    },
    component: SwicthMapComponent
  },
  {
    path: 'merge-map',
    data: {
      title: 'mergeMap'
    },
    component: MergeMapComponent
  },
  {
    path: 'concat-map',
    data: {
      title: 'concatMap'
    },
    component: ConcatMapComponent
  },
  {
    path: 'combine-all',
    data: {
      title: 'combineAll'
    },
    component: CombineAllComponent
  },
  {
    path: 'fork-join',
    data: {
      title: 'forkJoin'
    },
    component: ForkJoinComponent
  }
]

export const pageDefinitions: PageDefinition[] = childRoutes.map(it => ({
  title: it.data ? it.data.title as string : 'no title',
  urlPath: it.path as string
}));

export const components = [
  CombineLatestComponent,
  SwicthMapComponent,
  MergeMapComponent,
  ConcatMapComponent,
  CombineAllComponent,
  ForkJoinComponent
];
