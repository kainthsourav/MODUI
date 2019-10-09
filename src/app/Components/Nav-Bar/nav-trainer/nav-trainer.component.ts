import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-trainer',
  templateUrl: './nav-trainer.component.html',
  styleUrls: ['./nav-trainer.component.css']
})
export class NavTrainerComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


  
logout()
{
  
 localStorage.removeItem("trainerid");
 this.router.navigate(['login']);
 alert("Successfully logged out");
}

}
