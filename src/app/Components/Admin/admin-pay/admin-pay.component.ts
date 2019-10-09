import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import {Router} from "@angular/router";

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
  show;
  constructor(private myService:GetUsersService,private router:Router) { 
    if(localStorage.getItem("adminid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    } 
  }

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
         if(Object.keys(this.payRecords).length>0)
         {
           this.show=false;
         }
         else
         {
            this.show=true;
         }

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

   logout()
{
  localStorage.removeItem("adminid");
 this.router.navigate(['login']);
 alert("Successfully logged out");
}
}


