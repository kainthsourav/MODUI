import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

//  username:any;
//  password:any;

constructor(private fb:FormBuilder) { }

UserLogin: FormGroup;
submitted = false;


ngOnInit() {
  this.UserLogin=this.fb.group({
    // Name:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
    Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    Password:['',[Validators.required,Validators.minLength(8)]]
    // Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
    // Passwords:this.fb.group({
    //   Password:['',[Validators.required,Validators.minLength(8)]],
    //   ConfirmPassword:['',Validators.minLength(8)]
    // },{validator:this.comparePasswords})
  });
}

onSubmit(){
  this.submitted = true;
  if (this.UserLogin.invalid) {
      return;
  }
  alert('SUCCESS!!'+JSON.stringify(this.UserLogin.value));
}

}
