import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLandingComponent } from './features/login-landing/login-landing.component';
import { LoginFormComponent } from './features/login-landing/login-form/login-form.component';
import { LoginFormInputComponent } from './features/login-landing/login-form/login-form-input/login-form-input.component';
import {RegisterModule} from "./register/register.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginLandingComponent,
    LoginFormComponent,
    LoginFormInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegisterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
