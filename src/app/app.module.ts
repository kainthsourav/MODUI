import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TrainerSignInComponent } from './trainer-sign-in/trainer-sign-in.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHomeComponent,
    SignUpComponent,
    LoginComponent,
    TrainerSignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
