import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";


@Component({
  selector: 'app-trainer-menu',
  templateUrl: './trainer-menu.component.html',
  styleUrls: ['./trainer-menu.component.css']
})
export class TrainerMenuComponent implements OnInit {
  myTrainings;
  Data;
  Progress;
  msg;
  getId;
  CurrentUser;
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    let i= localStorage.getItem("Id");
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

  Update(id)
  { 
    this.getId=id;
  }

  Mainupdate()
  {
    let data={
      id:this.getId,
      progress:this.Progress
    };

    // alert(JSON.stringify(data));
  this.myService.trainingProgress(data).subscribe(data=>{
    this.msg=data;
    alert(this.msg);
    this.Progress='';
    this.getTrainings();
  });
  }
}
