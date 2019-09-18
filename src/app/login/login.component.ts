import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  SignUp(username,password)
  {
    this.username=username;
    this.password=password;
    alert(this.username+" "+this.password);
   // this.router.navigate(['/signup']);
  }

}
