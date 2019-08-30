import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLandingComponent } from './login-landing/login-landing.component';
import { LoginFormComponent } from './login-landing/login-form/login-form.component';
import { LoginFormInputComponent } from './login-landing/login-form/login-form-input/login-form-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginLandingComponent,
    LoginFormComponent,
    LoginFormInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
