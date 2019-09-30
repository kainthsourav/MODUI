import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-trainer-sign-up',
  templateUrl: './trainer-sign-up.component.html',
  styleUrls: ['./trainer-sign-up.component.css']
})
export class TrainerSignUpComponent implements OnInit {

  // Username:any;
  // Email:any;
  // Password:any;
  // Cpassword:any;
  // Fname:any;
  // Lname:any;
  // Mobile:any;
  // Timezone:any;
  // Timing:any;
  // OtherTech:any;
  // Facility:any;
  // Linkedin:any;
  // Exp:any;

  myForm:FormGroup;

  constructor(private fb:FormBuilder) {
    this.myForm=fb.group({
      Username:['', [Validators.required]],
      Email:['', [Validators.required]],
      Password:['', [Validators.required]],
      Cpassword:['', [Validators.required]],
      Fname:['', [Validators.required]],
      Lname:['', [Validators.required]],
      Mobile:['', [Validators.required]],
      Timezone:['', [Validators.required]],
      Timing:['', [Validators.required]],
      OtherTech:['', [Validators.required]],
      Facility:['', [Validators.required]],
      Linkedin:['', [Validators.required]],
      Exp:['', [Validators.required]],
   });
   }

  ngOnInit() {
  }

// Tsignup()
// {
//   console.log(this.Username);
//   console.log(this.Password);
//   console.log(this.Cpassword);
//   console.log(this.Fname);
//   console.log(this.Lname);
//   console.log(this.Mobile);
//   console.log(this.Timezone);
//   console.log(this.Timing);
//   console.log(this.OtherTech);
//   console.log(this.Facility);
//   console.log(this.Linkedin);
//   console.log(this.Exp)
// }

MentorSignup(myForm)
{
  
    console.log(myForm.value);
  
}


}
