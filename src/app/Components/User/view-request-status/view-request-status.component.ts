import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import { Router } from '@angular/router';

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

  allReciptData;
  ReciptData;
  CurrentUser;

  show:boolean=true;

  constructor(private myService:GetUsersService,private route:Router) {
    if(localStorage.getItem("userid")==undefined)
    {
      alert("Please login");
      this.route.navigate(['login']);
    }

   }

  ngOnInit() {
  let i= localStorage.getItem("userid");
  this.CurrentUser= +i;
  this.getmyData();
  this.getPaymentDtls();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Approved=_.where(this.myData,{accept:true,userId:this.CurrentUser});
        console.log(this.Approved);
         this.Pending=_.where(this.myData,{accept:false,rejected:false,userId:this.CurrentUser});
        this.Declined=_.where(this.myData,{rejected:true,userId:this.CurrentUser});
        console.log("Pending "+JSON.stringify(this.Pending));

        if(
          Object.keys(this.Pending).length>0 ||
          Object.keys(this.Declined).length>0 ||
          Object.keys(this.Approved).length>0)
        {
          this.show=false;
        }
        else
        {
         this.show=true;
        }
       
      });
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {
        this.allReciptData=data;
      })
  }


  Pay(id)
  {
    alert(id);  
    const data={
      ID:id,
   };
 
    this.route.navigate(['/Payment'],{queryParams:data});  
  }

  SeeRecipt(id)
  {
    console.dir(this.allReciptData);
    
   this.ReciptData=_.where(this.allReciptData,{skillId:id,userId:this.CurrentUser,PaymentStatus:true});
    
    console.log(this.ReciptData);


  }

}
