import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer-sign-in',
  templateUrl: './trainer-sign-in.component.html',
  styleUrls: ['./trainer-sign-in.component.css']
})
export class TrainerSignInComponent implements OnInit {
   tusername:string;
   password:string;
  constructor() { }

  ngOnInit() {
  }

  SignIn()
  {
    if(this.tusername!=undefined && this.password!=undefined)
    {
      console.log(this.tusername +" "+this.password);
    }
  }
  
}
