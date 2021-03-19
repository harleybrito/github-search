import { NoRouteScreenComponent } from './screens/no-route-screen/no-route-screen.component';
import { UserScreenComponent } from './screens/user-screen/user-screen.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeScreenComponent } from './screens/home-screen/home-screen.component';

const routes: Routes = [
  { path: 'home', component: HomeScreenComponent },
  { path: 'users/:username', component: UserScreenComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NoRouteScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
