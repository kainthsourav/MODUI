import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit {
 
  myTrainings;
  traninerName;
  CurrentUser; 
  constructor(private myService:GetUsersService,private router:Router) { 
    if(localStorage.getItem("userid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("userid");
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