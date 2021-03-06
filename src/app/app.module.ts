import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/Index/home/home.component';
import { NavHomeComponent } from './Components/Nav-Bar/nav-home/nav-home.component';
import { SignUpComponent } from './Components/sign-up/sign-up.component';
import { LoginComponent } from './Components/login/login.component';
import { TrainerSignInComponent } from './Components/trainer-sign-in/trainer-sign-in.component';
import { TrainerSignUpComponent } from './Components/trainer-sign-up/trainer-sign-up.component';
import { TrainerMenuComponent } from './Components/Mentor/trainer-menu/trainer-menu.component';
import { AdminMenuComponent } from './Components/Admin/admin-menu/admin-menu.component';
import { UserMenuComponent } from './Components/User/user-menu/user-menu.component';
import { FormsModule } from '@angular/forms';
import { NavUserComponent } from './Components/Nav-Bar/nav-user/nav-user.component';
import { FooterComponent } from './Components/Footer/footer/footer.component';
import { SearchTrainingsComponent } from './Components/User/search-trainings/search-trainings.component';
import { CompletedTrainingsComponent } from './Components/User/completed-trainings/completed-trainings.component';
import { HomeFooterComponent } from './Components/Footer/home-footer/home-footer.component';
import { EditSkillsComponent } from './Components/Mentor/edit-skills/edit-skills.component';
import { PaymentDetailsComponent } from './Components/Mentor/payment-details/payment-details.component';
import { TcompletedTrainingsComponent } from './Components/Mentor/tcompleted-trainings/tcompleted-trainings.component';
import { AdminPayComponent } from './Components/Admin/admin-pay/admin-pay.component';
import { BlockUserComponent } from './Components/Admin/block-user/block-user.component';
import { NavIndexComponent } from './Components/Nav-Bar/nav-index/nav-index.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestServComponent } from './Components/Testing/test-serv/test-serv.component';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmMentorComponent } from './components/user/confirm-mentor/confirm-mentor.component';
import { ViewRequestStatusComponent } from './components/User/view-request-status/view-request-status.component';
import { RequestedTrainingsComponent } from './components/mentor/requested-trainings/requested-trainings.component';
import { PaymentComponent } from './components/user/payment/payment.component';
import { NavTrainerComponent } from './Components/nav-bar/nav-trainer/nav-trainer.component';
import { CurrentComponent } from './Components/admin/current/current.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { TrainerProfileComponent } from './components/mentor/trainer-profile/trainer-profile.component';


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
    NavUserComponent,
    FooterComponent,
    SearchTrainingsComponent,
    CompletedTrainingsComponent,
    HomeFooterComponent,
    EditSkillsComponent,
    PaymentDetailsComponent,
    TcompletedTrainingsComponent,
    AdminPayComponent,
    BlockUserComponent,
    NavIndexComponent,
    PageNotFoundComponent,
    TestServComponent,
    ConfirmMentorComponent,
    ViewRequestStatusComponent,
    RequestedTrainingsComponent,
    PaymentComponent,
    NavTrainerComponent,
    CurrentComponent,
    ProfileComponent,
    TrainerProfileComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
