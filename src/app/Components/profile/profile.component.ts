import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../Services/get-users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  CurrentUser;
  profileData;

  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    let i= localStorage.getItem("Id");
    this.CurrentUser= +i;
    this.myService.GetUserById(this.CurrentUser).subscribe(data=>{
      this.profileData=data;
      console.log(this.profileData);
    });
  }
  
}
