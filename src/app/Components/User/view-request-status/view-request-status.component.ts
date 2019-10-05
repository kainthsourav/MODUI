import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-view-request-status',
  templateUrl: './view-request-status.component.html',
  styleUrls: ['./view-request-status.component.css']
})
export class ViewRequestStatusComponent implements OnInit {

  myData;
  Approved;
  Declined;
  Pending;
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
 this.getmyData();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Approved=_.where(this.myData,{accept:true,userId:1});
         this.Pending=_.where(this.myData,{accept:false,rejected:false,userId:1});
        this.Declined=_.where(this.myData,{rejected:true,userId:1});
        console.log("Pending "+JSON.stringify(this.Pending));
      });

  }

}
