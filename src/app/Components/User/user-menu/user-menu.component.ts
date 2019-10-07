import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import {LoginComponent} from '../../login/login.component';
import * as _ from "underscore";

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
 
  myTrainings;
  traninerName;
  CurrentUser; 
  constructor(private myService:GetUsersService,) { }

  ngOnInit() {
    let i= localStorage.getItem("Id");
    this.CurrentUser= +i;
    this.getTrainings();
  }

  getTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>{
      this.myTrainings=_.where(data,{accept:true,userId:this.CurrentUser,PaymentStatus:true});
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