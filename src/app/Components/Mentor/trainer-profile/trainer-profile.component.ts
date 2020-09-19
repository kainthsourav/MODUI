import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trainer-profile',
  templateUrl: './trainer-profile.component.html',
  styleUrls: ['./trainer-profile.component.css']
})
export class TrainerProfileComponent implements OnInit {

  CurrentUser;
  ProfileData;
  TrainingDtls;
  Update:boolean=false;

  msg;

  constructor(private myService:GetUsersService,private route:Router) {
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    }
   }

  ngOnInit() {
    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getUserProfile();
  
  }

getUserProfile()
{
  this.myService.GetUserById(this.CurrentUser).subscribe(data=>
    {
      this.ProfileData=data;
      // console.log(this.ProfileData);
      
    })
}

Edit()
{
  this.Update=true;
}

Save()
{
  this.Update=false;
 
   const data={

    contactNumber: this.ProfileData.contactNumber,
    firstName:this.ProfileData.firstName,
    id:this.CurrentUser,
    lastName:this.ProfileData.lastName,
    yearOfExperience:this.ProfileData.yearOfExperience
   }

   this.myService.UpdateProfile(data).subscribe(data=>{
     this.msg=data;
     alert(this.msg);
   });

}

Cancel()
{
  this.Update=false;
}


}
