import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavHomeComponent } from './nav-home/nav-home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { TrainerSignInComponent } from './trainer-sign-in/trainer-sign-in.component';
import { TrainerSignUpComponent } from './trainer-sign-up/trainer-sign-up.component';
import { TrainerMenuComponent } from './trainer-menu/trainer-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { FormsModule } from '@angular/forms';
import { NavUserComponent } from './nav-user/nav-user.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavHomeComponent,
    SignUpComponent,
    LoginComponent,
    TrainerSignInComponent,
    TrainerSignUpComponent,
    TrainerMenuComponent,
    AdminMenuComponent,
    UserMenuComponent,
    AdminLoginComponent,
    NavUserComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
