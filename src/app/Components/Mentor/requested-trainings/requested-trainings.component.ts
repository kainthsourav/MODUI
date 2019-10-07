import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-requested-trainings',
  templateUrl: './requested-trainings.component.html',
  styleUrls: ['./requested-trainings.component.css']
})
export class RequestedTrainingsComponent implements OnInit {

  myData;
  Requested;
  Approved;
  Declined;
  msg;
  CurrentUser;
  
 
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    let i= localStorage.getItem("Id");
    this.CurrentUser= +i;
 this.getmyData();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Requested=_.where(this.myData,{accept:false,rejected:false,mentorId:this.CurrentUser});


        this.Approved=_.where(this.myData,{accept:true,rejected:false,mentorId:this.CurrentUser});

        this.Declined=_.where(this.myData,{accept:false,rejected:true,mentorId:this.CurrentUser});

        console.log("Requested"+JSON.stringify(this.Approved));


      });

  }

  RequestApproved(id)
  {
     this.myService.ApproveTraining(id).subscribe(data=>{
       this.msg=data;
       alert(this.msg);
       this.getmyData();
     });
  }

  RequestDeclined(id)
  {
   this.myService.DeclineTraining(id).subscribe(data=>
    {
     this.msg=data;
      alert(this.msg);
      this.getmyData();
    });
  }

}
