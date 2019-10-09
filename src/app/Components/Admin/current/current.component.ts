import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  CurrentTrainings;
  show:boolean=true;
  constructor(private myService:GetUsersService,private router:Router) {
    if(localStorage.getItem("adminid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    } 
   }

  ngOnInit() {
    this.getAllTrainings();
  }


  getAllTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.CurrentTrainings=data;
        if(Object.keys(this.CurrentTrainings).length>0)
        {
          this.show=false;
        }
        else
        {
           this.show=true;
        }
        console.log(this.CurrentTrainings);
      });
  }

  logout()
{
  localStorage.removeItem("adminid");
 this.router.navigate(['login']);
 alert("Successfully logged out");
}
}
