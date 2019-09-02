import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//components
import {LandingComponent} from "./register/landing/landing.component"


const routes: Routes = [
  
  {path: "test", component: LandingComponent},
  {path: "", }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
