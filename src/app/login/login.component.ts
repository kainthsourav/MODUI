import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import{Form} from '@angular/forms'

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

  SignUp()
  {
    if(this.username!=undefined && this.password!=undefined)
    {
       //Admin Login 
    // if(this.username=="Admin"||"admin" && this.password=="Admin"||"admin")
    // {
    //   this.router.navigate(['/AdminMenu']); 
    // }
    // else
    // {
      this.router.navigate(['/UserMenu']);
    // }
      

    }

   
    else
    {
    alert("Please Fill the Correct Username/Password");
    }
  
  
  }

}
