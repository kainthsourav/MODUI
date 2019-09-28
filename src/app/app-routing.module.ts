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
import { SearchTrainingsComponent } from './search-trainings/search-trainings.component';
import { CompletedTrainingsComponent } from './completed-trainings/completed-trainings.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { TcompletedTrainingsComponent } from './tcompleted-trainings/tcompleted-trainings.component';
import { AdminPayComponent } from './admin-pay/admin-pay.component';
import { BlockUserComponent } from './block-user/block-user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignUpComponent},

  {path:'TrainerSignIn',component:TrainerSignInComponent},
  {path:'TrainerSignUp',component:TrainerSignUpComponent},

  {path:'UserMenu',component:UserMenuComponent},
  {path:"TrainerMenu",component:TrainerMenuComponent},
  {path:"AdminMenu",component:AdminMenuComponent},

  {path:"SearchTrainings",component:SearchTrainingsComponent},
  {path:"CompletedTrainings",component:CompletedTrainingsComponent},
  {path:"TcompleteTraining",component:TcompletedTrainingsComponent},

  {path:"EditSkills",component:EditSkillsComponent},
  {path:"PaymentDetails",component:PaymentDetailsComponent},
 
  {path:"AdminPay",component:AdminPayComponent},
  
  {path:"blockuser",component:BlockUserComponent},

  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
