
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './containers/home-page/home-page.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { NotFoundPageComponent } from './containers/not-found-page/not-found-page.component';
import { appRoutes } from './app.routes';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArchway, faHome, faSignOutAlt, faTachometerAlt, faFileAlt } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideNavComponent,
    TopBarComponent,
    NotFoundPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {
      useHash: true
    }),
    FontAwesomeModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faArchway, faHome, faSignOutAlt, faTachometerAlt, faFileAlt);
  }
}
