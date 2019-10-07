import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.css']
})
export class PaymentDetailsComponent implements OnInit {

  payRecords;
  myPayRecord;
  userData;
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    this.getPaymentDtls();
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {
//         PaymentStatus: false
// commision: ""
// fees: "10000"
// id: 1
// mentorId: 2
// mentorfees: ""
// skillId: 11
// skillName: "Java"
// txtType: null
// userId: 1
        this.payRecords=data;
        console.log(this.payRecords);
         this.myPayRecord=_.where(this.payRecords,{mentorId:2});
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
