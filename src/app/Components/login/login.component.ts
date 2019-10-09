import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
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
    
  }




  ngOnInit() {
    this.UserLogin = this.fb.group({
    
      Email: ['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      Password: ['', [Validators.required]]
    
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.UserLogin.invalid) {
      return;
    }

      this.sendlogin.login(JSON.stringify(this.UserLogin.value)).subscribe((data)=>{this.Data=data

        if(this.Data!=undefined)
        {
         
          console.log(this.Data);
        if (this.Data.role == 1)
         {
          //Admin ID

          localStorage.setItem("adminid", this.Data.id);

          this.router.navigate(['AdminMenu']);
        }
        else if (this.Data.role == 2 && this.Data.active == true) {
          //Trainer ID 

          localStorage.setItem("trainerid", this.Data.id);

          this.router.navigate(['TrainerMenu']);
        }
        else if (this.Data.role == 3 && this.Data.active == true) {
          //User ID
          localStorage.setItem("userid", this.Data.id);
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