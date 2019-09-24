import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TrainerSignInComponent } from './trainer-sign-in/trainer-sign-in.component';
import { TrainerSignUpComponent } from './trainer-sign-up/trainer-sign-up.component';
import { UserMenuComponent } from './user-menu/user-menu.component';
import { TrainerMenuComponent } from './trainer-menu/trainer-menu.component';
import { AdminMenuComponent } from './admin-menu/admin-menu.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},
  {path:'TrainerSignIn',component:TrainerSignInComponent},
  {path:'TrainerSignUp',component:TrainerSignUpComponent},
  {path:'UserMenu',component:UserMenuComponent},
  {path:"TrainerMenu",component:TrainerMenuComponent},
  {path:"AdminMenu",component:AdminMenuComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
