import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/Index/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { TrainerSignInComponent } from './Components/trainer-sign-in/trainer-sign-in.component';
import { TrainerSignUpComponent } from './Components/trainer-sign-up/trainer-sign-up.component';
import { UserMenuComponent } from './Components/User/user-menu/user-menu.component';
import { TrainerMenuComponent } from './Components/Mentor/trainer-menu/trainer-menu.component';
import { AdminMenuComponent } from './Components/Admin/admin-menu/admin-menu.component';
import { SearchTrainingsComponent } from './Components/User/search-trainings/search-trainings.component';
import { CompletedTrainingsComponent } from './Components/User/completed-trainings/completed-trainings.component';
import { EditSkillsComponent } from './Components/Mentor/edit-skills/edit-skills.component';
import { PaymentDetailsComponent } from './Components/Mentor/payment-details/payment-details.component';
import { TcompletedTrainingsComponent } from './Components/Mentor/tcompleted-trainings/tcompleted-trainings.component';
import { AdminPayComponent } from './Components/Admin/admin-pay/admin-pay.component';
import { BlockUserComponent } from './Components/Admin/block-user/block-user.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TestServComponent } from './Components/Testing/test-serv/test-serv.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ConfirmMentorComponent } from './components/user/confirm-mentor/confirm-mentor.component';
import { ViewRequestStatusComponent } from './components/User/view-request-status/view-request-status.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
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
   {path:"Test",component:TestServComponent},

   {path:"Profile",component:ProfileComponent},

   {path:"ConfirmMentor",component:ConfirmMentorComponent},

   {path:"ViewRequest",component:ViewRequestStatusComponent},

  {path:"**",component:PageNotFoundComponent}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
