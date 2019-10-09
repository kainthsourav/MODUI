import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service'
import {Router} from '@angular/router';
import * as _ from 'underscore';

@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {

  Userlist;
  msg;
  user;
  mentor;

  constructor(private _service:GetUsersService,private route:Router) { 
    if(localStorage.getItem("adminid")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    } 
   this.GetAllUsers();
  
  }

  ngOnInit() {
  }

  GetAllUsers()
  {
    this._service.GetAll().subscribe(data=>
      {
        this.Userlist = data;
        this.onGetUserRole();
      });
  }


  onGetUserRole() {
    this.user = _.where(this.Userlist,{role: 3});
    this.mentor  = _.where(this.Userlist,{role:2});
    console.log(this.mentor);
    console.log("Users"+this.user)
  }


  Unblock(id:any)
  {
   this._service.Unblock(id).subscribe((data)=>
   {
     this.msg=data;
    this.GetAllUsers();
    this.onGetUserRole();
    alert(this.msg);
    });
  //  alert("Unlocked No "+id);
  //  this.route.navigate(['/blockuser']);
  }

  Block(id:any)
  {
    this._service.Block(id).subscribe((data)=>
    {
      this.msg=data;
      this.GetAllUsers();
    this.onGetUserRole();
    alert(this.msg);
    });
    // alert("Blocked No "+id);
    // this.route.navigate(['/blockuser']);
  }

  logout()
{
  localStorage.removeItem("adminid");
 this.route.navigate(['login']);
 alert("Successfully logged out");
}

}
