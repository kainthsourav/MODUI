import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
 
  myTrainings;
  traninerName;
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    this.getTrainings();
  }

  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,userId:1,PaymentStatus:true});
      console.log(this.myTrainings);
     // this.getTrainerById();
    });
  }

  getTrainerById()
  {
    this.myService.GetAll().subscribe(data=>
    {
      this.traninerName=data;
      console.log(this.traninerName);
    })
  }
}
//     PaymentStatus: true
// accept: true
// amountReceived: null
// avaRating: null
// commisionAmount: null
// endDate: "2019-12-06T00:00:00"
// id: 1
// mentorId: 2
// mentorName: "Kainth Sourav"
// progress: null
// rating: null
// rejected: false
// skillId: 11
// skillname: "Java"
// startDate: "2019-10-06T00:00:00"
// status: null
// timeSlot: "03:00 PM - 06:00 PM"
// userId: 1
// userName: "Sourav"
 
