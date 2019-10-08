import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-admin-pay',
  templateUrl: './admin-pay.component.html',
  styleUrls: ['./admin-pay.component.css']
})
export class AdminPayComponent implements OnInit {
  payRecords;
  myPayRecord;
  userData;
  CurrentUser;
  Response;
  FeeData;
  Fee;
  Commision;
  Id;
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    // let i= localStorage.getItem("Id");
    // this.CurrentUser= +i;
    this.getPaymentDtls();
  }


  getPaymentDtls()
  {
    this.myService.AllPayments().subscribe(data=>
      {

        this.payRecords=data;
        console.log(this.payRecords);
         console.log(this.myPayRecord);

      });
  }

  update(id)
  {

    this.Id=id;
    this.myPayRecord=_.where(this.payRecords,{id:id});
    console.log(this.myPayRecord);
    this.FeeData=_.where(this.payRecords,{id:id});
    console.log(this.Fee);
    this.Fee=this.FeeData[0].fees;
  }

  Mainupdate()
  {
    if(this.Commision!=undefined)
    {
      
      const data={
        id:this.Id,
        fees:this.Fee,
        commision:this.Commision
      };


      this.myService.AddCommision(data).subscribe(data=>{
        this.Response=data;
        alert(this.Response);
        this.getPaymentDtls();
        this.Commision="";
      });
    }
    else
    {
     alert("Please Fill the Amount");
    }
  

   }
}


