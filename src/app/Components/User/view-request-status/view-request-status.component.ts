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

  constructor(private myService:GetUsersService,private route:Router) { }

  ngOnInit() {
 this.getmyData();
 this.getPaymentDtls();

  }

  getmyData()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.myData=data;
        console.log(this.myData);
        this.Approved=_.where(this.myData,{accept:true,userId:1});
        console.log(this.Approved);
         this.Pending=_.where(this.myData,{accept:false,rejected:false,userId:1});
        this.Declined=_.where(this.myData,{rejected:true,userId:1});
        console.log("Pending "+JSON.stringify(this.Pending));
       
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
    
   this.ReciptData=_.where(this.allReciptData,{skillId:id,userId:this.Approved[0].userId,PaymentStatus:true});
    
    console.log(this.ReciptData);

    // PaymentStatus: true
    // commision: ""
    // fees: "5000"
    // id: 6
    // mentorId: 3
    // mentorfees: ""
    // skillId: 12
    // skillName: "C"
    // txtType: null
    // userId: 1

  }

}
