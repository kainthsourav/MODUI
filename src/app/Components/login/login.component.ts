import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserDtl } from '../../Models/UserDtl';
import { GetUsersService } from '../../Services/get-users.service'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //  username:any;
  //  password:any;

  UserLogin: FormGroup;
  submitted = false;
  UserDetails;
  Data;

  constructor(private fb: FormBuilder, private sendlogin: GetUsersService, private router: Router) {
    this.UserDetails = new UserDtl();
  }




  ngOnInit() {
    this.UserLogin = this.fb.group({
      // Name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required]]
      // Validators.minLength(8)
      // Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
      // Passwords:this.fb.group({
      //   Password:['',[Validators.required,Validators.minLength(8)]],
      //   ConfirmPassword:['',Validators.minLength(8)]
      // },{validator:this.comparePasswords})
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.UserLogin.invalid) {
      return;
    }

      //assigning values to model
      //  this.UserDetails.email=this.UserLogin.value.Email;
      //  this.UserDetails.password=this.UserLogin.value.Password;

      //calling api

      //  this.sendlogin.login(this.UserDetails).subscribe((data)=>this.Data=data);
      //  console.log("Data is here"+JSON.stringify(this.Data));

      // const user={
      //   email:this.UserLogin.value.Email,
      //   password:this.UserLogin.value.Password
      // }

      this.sendlogin.login(JSON.stringify(this.UserLogin.value)).subscribe((data)=>{this.Data=data
      
        if(this.Data!=undefined)
        {
        if (this.Data.role == 1) {
          this.router.navigate(['AdminMenu']);
        }
        else if (this.Data.role == 2 && this.Data.active == true) {
          this.router.navigate(['TrainerMenu']);
        }
        else if (this.Data.role == 3 && this.Data.active == true) {
          this.router.navigate(['UserMenu']);
        }
        else {
          alert("Account Blocked");
        }
      }
      else
      {
        alert("Invalid Email and Password");
      }

      });

     
  }
}