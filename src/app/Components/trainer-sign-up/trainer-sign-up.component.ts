import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { GetUsersService } from '../../Services/get-users.service'

@Component({
  selector: 'app-trainer-sign-up',
  templateUrl: './trainer-sign-up.component.html',
  styleUrls: ['./trainer-sign-up.component.css']
})
export class TrainerSignUpComponent implements OnInit {

  UserRegister: FormGroup;
  submitted = false;
  Data;
  SKillData;
    constructor(private fb: FormBuilder,private MentorSignService:GetUsersService) { 
     
      this.MentorSignService.AllSkills().subscribe(data=>{
        this.SKillData=data;
        console.log(this.SKillData);
      });
    }

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
        Experience:['',[Validators.required,Validators.pattern('^[0-9]{1,2}$')]], 
        // Timings: ['',[Validators.required]],
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

  onSubmit()
  {
    if(this.UserRegister.valid)
    {
      
      const MentorSignUp={
          userName:this.UserRegister.value.Email,
          password:this.UserRegister.value.Passwords.Password,
          email:this.UserRegister.value.Email,
          firstName:this.UserRegister.value.firstName,
          lastName:this.UserRegister.value.lastName,
          contactNumber:this.UserRegister.value.Phone,
          linkdinUrl:this.UserRegister.value.LinkedinURL,
          yearOfExperience:this.UserRegister.value.Experience,
          // TrainerTimings:this.UserRegister.value.Timings,
          TrainerTechnology:this.UserRegister.value.Technology,
          active:1,
          role:2,
        };
        console.log(MentorSignUp);
      
        this.MentorSignService.Register(JSON.stringify(MentorSignUp)).subscribe((data)=>{this.Data=data;
          alert(this.Data);
          console.log(this.Data)
        });
    }
    else
    {
      console.log('Valid?', this.UserRegister.valid);
    }
  
  }
  
  }