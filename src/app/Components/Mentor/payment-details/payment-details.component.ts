import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import {Router} from "@angular/router";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  payRecords;
  myPayRecord;
  userData;
  CurrentUser;
  show;
  Uid;
  constructor(private myService:GetUsersService,private router:Router) { 
    if(localStorage.getItem("trainerid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("trainerid");
    this.CurrentUser= +i;
    this.getPaymentDtls();
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {

        this.payRecords=data;
        console.log(this.payRecords);
         this.myPayRecord=_.where(this.payRecords,{mentorId:this.CurrentUser});
         console.log(this.myPayRecord);
         if(Object.keys(this.myPayRecord).length>0)
         {
           this.show=false;
          
         }
         else
         {
           this.show=true;
         }

      });
  }


  getDetails(rowId)
  {
   
    this.myPayRecord=_.where(this.payRecords,{id:rowId});
    let uid=this.myPayRecord[0].userId;
    this.Uid= +uid;
    this.getUserById(this.Uid);

  }

  getUserById(id)
  {
    this.myService.GetUserById(id).subscribe(data=>
      {
         this.userData=data;
         console.log(this.userData);
      })
  }

}
