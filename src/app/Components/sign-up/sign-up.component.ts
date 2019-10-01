import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  myForm:FormGroup;
  status:boolean=false;

//  Username:string;
//  Email:string;
//  Password:string;
//  CPassword:string;
//  Fname:string;
//  Lname:string;
//  Mobile:string;
// Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')


  constructor(private fb:FormBuilder) {
    this.myForm=fb.group({
      Username: ['', [Validators.required]],
      Email:['', [Validators.required,Validators.email]],
      Password:['', [Validators.required]],
      CPassword:['', [Validators.required]],
      Fname:['', [Validators.required]],
      Lname:['', [Validators.required]],
      Mobile:['', [Validators.required]],
   });
   
   }

  ngOnInit() {
  }

  UserSignup(Form:FormGroup)
  {


    if(Form.valid)
    {
      if(Form.value.Password==Form.value.CPassword)
      {
        console.log(Form.value);
        this.status=false;
        console.log('Valid?', Form.valid);
      }
    }
    else
    {
      this.status=true;
      console.log('Valid?', Form.valid);
    }
    // true or false


    // if(this.Username!=undefined && this.Email!=undefined
    //   && this.Password!=undefined && this.CPassword!=undefined
    //   && this.Fname!=undefined && this.Lname!=undefined && this.Mobile!=undefined)
    //   {
    //       if(this.Password==this.CPassword)
    //       {
    //     console.log(this.Username);
    //     console.log(this.Email);
    //     console.log(this.Password);
    //     console.log(this.CPassword);
    //     console.log(this.Fname);
    //     console.log(this.Lname);
    //     console.log(this.Mobile);
    //       }
       
      }
  
}
