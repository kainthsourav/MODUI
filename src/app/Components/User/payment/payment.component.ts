import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import{GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id;
  myData:any;
  skillData;
  msg;
  constructor(private route:ActivatedRoute,private myService:GetUsersService) { }

  ngOnInit() {
    this.getQueryData();
    
  }

  getQueryData() {
    this.route.queryParams.subscribe(params => {
      
      let pid = params["ID"];
      this.id =  +pid;
      console.log(typeof(this.id));
      this.getTrainingById(this.id);

    });
  }

  getTrainingById(id)
  {
    this.myService.trainingById(id).subscribe(data=>
      {
        this.myData=data;
        console.log("Training Data");
        console.log(this.myData);
        console.log(this.myData[0].skillId);
     this.getSkillDetails(this.myData[0].skillId);
      });
  }

  getSkillDetails(id)
  {
    this.myService.GetSkillById(id).subscribe(data=>{
      this.skillData=data;
      console.log("SKill Data");
      console.log(this.skillData);
    });
  }

  onSubmit()
  {
    const payData={
      id:this.id,
      txtTpe:"Online",
      userId:this.myData[0].userId,
      mentorId:this.myData[0].mentorId,
      skillId:this.myData[0].skillId,
      skillName:this.myData[0].skillname,
      fees:this.skillData[0].fees,
      mentorfees:'',
      commision:'',
      PaymentStatus:true
    };

    //to payment api
    this.myService.trainingPayment(payData).subscribe(data=>{
      this.msg=data;
      alert(this.msg);
    });
  }


}
