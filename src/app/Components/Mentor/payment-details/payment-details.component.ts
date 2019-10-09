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
  constructor(private myService:GetUsersService,private router:Router) { 
    if(localStorage.getItem("ttrainerid")==undefined)
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

      });
  }

  getUserById(id)
  {
    this.myService.GetUserById(id).subscribe(data=>
      {
         this.userData=data;
      })
  }


}
