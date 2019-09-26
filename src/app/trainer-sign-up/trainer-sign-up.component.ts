import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-sign-up',
  templateUrl: './trainer-sign-up.component.html',
  styleUrls: ['./trainer-sign-up.component.css']
})
export class TrainerSignUpComponent implements OnInit {

  Username:any;
  Email:any;
  Password:any;
  Cpassword:any;
  Fname:any;
  Lname:any;
  Mobile:any;
  Timezone:any;
  Timing:any;
  OtherTech:any;
  Facility:any;
  Linkedin:any;
  Exp:any;

  constructor() { }

  ngOnInit() {
  }

Tsignup()
{
  console.log(this.Username);
  console.log(this.Password);
  console.log(this.Cpassword);
  console.log(this.Fname);
  console.log(this.Lname);
  console.log(this.Mobile);
  console.log(this.Timezone);
  console.log(this.Timing);
  console.log(this.OtherTech);
  console.log(this.Facility);
  console.log(this.Linkedin);
  console.log(this.Exp)
}

}
