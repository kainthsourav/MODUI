import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-trainer-sign-up',
  templateUrl: './trainer-sign-up.component.html',
  styleUrls: ['./trainer-sign-up.component.css']
})
export class TrainerSignUpComponent implements OnInit {

  UserRegister: FormGroup;
  submitted = false;
    constructor(private fb: FormBuilder) { }

    ngOnInit() {
      this.UserRegister=this.fb.group({
        firstName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        lastName:['',[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
        Email:['',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
        Phone:['',[Validators.required,Validators.pattern('^([6-9]{1})([0-9]{9})$')]],
        Passwords:this.fb.group({
          Password:['',[Validators.required,Validators.minLength(8)]],
          ConfirmPassword:['',Validators.minLength(8)]
        },{validator:this.comparePasswords}),
        LinkedinURL: ['',[Validators.required,Validators.pattern('')]],  
        Experience:['',[Validators.required,Validators.pattern('^[0-9]{2}$')]], 
        Timings: ['',[Validators.required]],
        Technology:['',Validators.required]
      });
    }
    
  comparePasswords( fb: FormGroup){
    let confirmPassword=fb.get('ConfirmPassword');
    if(confirmPassword.errors==null || 'passwordMismatch' in confirmPassword.errors){
      if(fb.get('Password').value != confirmPassword.value)
        confirmPassword.setErrors({passwordMismatch:true});
      else
        confirmPassword.setErrors(null);
    }
  }

  onSubmit(){
    this.submitted = true;
    if (this.UserRegister.invalid) {
        return;
    }
    alert('SUCCESS!!'+JSON.stringify(this.UserRegister.value));
  }

    onReset() {
        this.submitted = false;
        this.UserRegister.reset();
    }
  }