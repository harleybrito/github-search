import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeScreenComponent } from './screens/home-screen/home-screen.component';
import { GithubSearchLabelComponent } from './components/github-search-label/github-search-label.component';
import { SearchComponent } from './components/search/search.component';
import { UserScreenComponent } from './screens/user-screen/user-screen.component';
import { NoRouteScreenComponent } from './screens/no-route-screen/no-route-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    GithubSearchLabelComponent,
    SearchComponent,
    UserScreenComponent,
    NoRouteScreenComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
