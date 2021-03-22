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
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UserPropertyIconizedComponent } from './components/user-property-iconized/user-property-iconized.component';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { allIcons } from 'ng-bootstrap-icons/icons';
import { NgxShimmerLoadingModule } from 'ngx-shimmer-loading';
import { SuccesfullLoadedUserComponent } from './components/succesfull-loaded-user/succesfull-loaded-user.component';
import { LoadingUserComponent } from './components/loading-user/loading-user.component';
import { ErrorLoadedUserComponent } from './components/error-loaded-user/error-loaded-user.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    GithubSearchLabelComponent,
    SearchComponent,
    UserScreenComponent,
    NoRouteScreenComponent,
    UserPropertyIconizedComponent,
    SuccesfullLoadedUserComponent,
    LoadingUserComponent,
    ErrorLoadedUserComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    BootstrapIconsModule.pick(allIcons),
    NgxShimmerLoadingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
