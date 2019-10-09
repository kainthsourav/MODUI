import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-completed-trainings',
  templateUrl: './completed-trainings.component.html',
  styleUrls: ['./completed-trainings.component.css']
})
export class CompletedTrainingsComponent implements OnInit {

  myTrainings;
  CurrentUser; 
  constructor(private myService:GetUsersService,private router:Router) { 
   if(localStorage.getItem("userid")==undefined)
  {
    alert("Please login");
    this.router.navigate(['login']);
  }
  }

  ngOnInit() {
    this.getTrainings();
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,userId:this.CurrentUser,PaymentStatus:true});
      console.log(this.myTrainings);
    });
  }
}
