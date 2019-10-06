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
        console.log(this.myData);
        console.log(this.myData[0].skillId);
     this.getSkillDetails(this.myData[0].skillId);
      });
  }

  getSkillDetails(id)
  {
    this.myService.GetSkillById(id).subscribe(data=>{
      this.skillData=data;
      console.log(this.skillData);
    });
  }

  onSubmit()
  {
    const payData={
      id:this.id,
      userId:this.myData[0].userId
    };

    console.log(payData);
  }


}
