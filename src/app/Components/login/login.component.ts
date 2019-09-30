import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm,FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 username:any;
 password:any;

  constructor(private router:Router) { }

  ngOnInit() {
  }

  SignIn()
  {
    if(this.username!=undefined && this.password!=undefined)
    {
      console.log(" "+this.username +" "+this.password);
      this.router.navigate(['/UserMenu']);
    }

   
    else
    {
    alert("Please Fill the Correct Username/Password");
    }
  
  
  }

}