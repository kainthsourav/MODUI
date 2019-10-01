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

constructor(private formBuilder: FormBuilder) { }
  
MyForm: FormGroup;
  submitted = false;
  ngOnInit() {
    this.MyForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
  });
  }
  onSubmit() {
    this.submitted = true;

    // stop the process here if form is invalid
    if (this.MyForm.invalid) {
        return;
    }

    alert('SUCCESS!!');
}   
}