import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {LoginLandingComponent} from "./features/login-landing/login-landing.component";
import {MainLandingComponent} from "./register/main-landing/main-landing.component";


const routes: Routes = [
  
  {path: "", component: LoginLandingComponent},
  {path: "landing", component: MainLandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
