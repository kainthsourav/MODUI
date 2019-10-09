import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import { Router } from '@angular/router';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  CurrentUser;
  ProfileData;
  TrainingDtls;

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
    this.getUserProfile();
    this.getTrainingDtls();
  }

getUserProfile()
{
  this.myService.GetUserById(this.CurrentUser).subscribe(data=>
    {
      this.ProfileData=data;
      console.log(this.ProfileData);
      
    })
}

getTrainingDtls()
{
  this.myService.trainingApprovals().subscribe(data=>
    {
      this.TrainingDtls=_.where(data,{accept:true,userId:this.CurrentUser,PaymentStatus:true});
      console.log(this.TrainingDtls);
    });
}

}
