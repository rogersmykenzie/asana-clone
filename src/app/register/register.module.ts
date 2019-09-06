import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLandingComponent } from './main-landing/main-landing.component';
import { NavComponent } from './nav/nav.component';



@NgModule({
  declarations: [MainLandingComponent, NavComponent],
  imports: [
    CommonModule
  ]
})
export class RegisterModule { }
