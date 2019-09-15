
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CombineLatestComponent } from './pages/combine-latest/combine-latest.component';
import { PlaygroundMenuComponent } from './components/playground-menu/playground-menu.component';

import { routes } from './playground.routes';

@NgModule({
  declarations: [
    CombineLatestComponent,
    PlaygroundMenuComponent
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
