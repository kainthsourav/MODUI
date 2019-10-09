import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tcompleted-trainings',
  templateUrl: './tcompleted-trainings.component.html',
  styleUrls: ['./tcompleted-trainings.component.css']
})
export class TcompletedTrainingsComponent implements OnInit {

  myTrainings;
  Data:boolean=true;
  CurrentUser;
  constructor(private myService:GetUsersService,private router:Router) {
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
   }

  ngOnInit() {
    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getTrainings();
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,mentorId:this.CurrentUser,PaymentStatus:true});
      console.log(this.myTrainings);
     console.log(Object.keys(this.myTrainings).length);
     if(Object.keys(this.myTrainings).length>0)
     {
       this.Data=false;
     }
     else
     {
       this.Data=true;
     }
    });
  }
}
