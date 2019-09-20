
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { SwicthMapComponent } from './pages/switch-map/switch-map.component';
import { MergeMapComponent } from './pages/merge-map/merge-map.component';
import { ConcatMapComponent } from './pages/concat-map/concat-map.component';
import { CombineAllComponent } from './pages/combine-all/combine-all.component';

import { ConsoleComponent } from './components/console/console.component';
import { PlaygroundMenuComponent } from './components/playground-menu/playground-menu.component';

import { routes } from './playground.routes';

@NgModule({
  declarations: [
    CombineLatestComponent,
    SwicthMapComponent,
    MergeMapComponent,
    ConcatMapComponent,
    CombineAllComponent,
    PlaygroundMenuComponent,
    ConsoleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forChild(routes)
  ],
  providers: [
  ],
  exports: [
    PlaygroundMenuComponent
  ]
})
export class PlaygroundModule {
}
