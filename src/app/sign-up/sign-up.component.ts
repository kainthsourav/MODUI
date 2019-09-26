import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

 Username:string;
 Email:string;
 Password:string;
 CPassword:string;
 Fname:string;
 Lname:string;
 Mobile:string;
 


  constructor() { }

  ngOnInit() {
  }

   Signup()
  {
    if(this.Username!=undefined && this.Email!=undefined
      && this.Password!=undefined && this.CPassword!=undefined
      && this.Fname!=undefined && this.Lname!=undefined && this.Mobile!=undefined)
      {
          if(this.Password==this.CPassword)
          {
        console.log(this.Username);
        console.log(this.Email);
        console.log(this.Password);
        console.log(this.CPassword);
        console.log(this.Fname);
        console.log(this.Lname);
        console.log(this.Mobile);
          }
       
      }
  }
}
