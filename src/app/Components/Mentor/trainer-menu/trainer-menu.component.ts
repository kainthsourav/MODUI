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
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    this.getTrainings();
  }


  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,mentorId:2,PaymentStatus:true});
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
