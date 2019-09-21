
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ConsoleComponent } from './components/console/console.component';
import { PlaygroundMenuComponent } from './components/playground-menu/playground-menu.component';

import { routes } from './playground.routes';

import { components } from './pages';

@NgModule({
  declarations: [
    ...components,
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
