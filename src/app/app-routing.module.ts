import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArcadeComponent} from "./arcade/arcade.component";

// not using routing for this version of the application, but with more features
// and functionality, I would use routing
const routes: Routes = [
  { path: 'home', component: ArcadeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
