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
import { FormsModule } from '@angular/forms';
import { NavUserComponent } from './nav-user/nav-user.component';
import { FooterComponent } from './footer/footer.component';
import { SearchTrainingsComponent } from './search-trainings/search-trainings.component';
import { CompletedTrainingsComponent } from './completed-trainings/completed-trainings.component';
import { HomeFooterComponent } from './home-footer/home-footer.component';
import { EditSkillsComponent } from './edit-skills/edit-skills.component';
import { PaymentDetailsComponent } from './payment-details/payment-details.component';
import { TcompletedTrainingsComponent } from './tcompleted-trainings/tcompleted-trainings.component';
import { AdminPayComponent } from './admin-pay/admin-pay.component';
import { BlockUserComponent } from './block-user/block-user.component';
import { NavIndexComponent } from './nav-index/nav-index.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    PageNotFoundComponent
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
