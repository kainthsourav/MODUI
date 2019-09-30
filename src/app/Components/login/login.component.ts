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
myForm:FormGroup;
status:boolean=false;

  constructor(private router:Router,private Fom:FormBuilder) {
    this.myForm=Fom.group({
      username: ['', Validators.compose([Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), Validators.required])],
      password: ['', [Validators.required]],
   });
  }
  ngOnInit() {
    
  }

  SignIn(Form:FormGroup)
  {
    if(Form.valid)
    {
       this.status=false;
       alert(Form.value.username +" "+Form.value.password);
       this.router.navigate(['/UserMenu']);
    }
    else
    {
      this.status=true;
    }
    console.log('Valid?', Form.valid); // true or false
    
  }

}