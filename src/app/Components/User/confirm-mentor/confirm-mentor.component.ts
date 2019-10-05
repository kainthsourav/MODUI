import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";


@Component({
  selector: 'app-confirm-mentor',
  templateUrl: './confirm-mentor.component.html',
  styleUrls: ['./confirm-mentor.component.css']
})
export class ConfirmMentorComponent implements OnInit {

  paramId: number;
  trainerTechnology: string;
  mentorData: any;
  skillData: any;
  skill: any;
  showRequestedCourse;any;

  Time: string;
  StartDate: Date;
  EndDate: Date;
  userName: string;
  email: string;
  name: string;
  fees: string;
  prerequisites: string;
  yourName:string;
  request:Boolean;
  sentData:any;

  constructor(private route: ActivatedRoute, private myservice:GetUsersService) {}

  ngOnInit() {
  this.getQueryData();
  this.GetUserById();
  this.getSkill();
  }

  getQueryData() {
    this.route.queryParams.subscribe(params => {
      this.paramId = params["ID"];
      this.trainerTechnology = params["Technology"];
      console.log(this.paramId + "  " + this.trainerTechnology);
    });
  }

  GetUserById() {
    this.myservice.GetUserById(this.paramId).subscribe(data => {
      this.mentorData = data;
      console.log(this.mentorData);
    });
  }

  getSkill() {
    this.myservice.AllSkills().subscribe(data => {
      this.skill = data;
      this.skillData = _.findWhere(this.skill, {
        name: this.trainerTechnology
      });
      console.log(this.skillData.id);
    });
  }

  onSubmit() {
    const data = {
      Time: this.Time,
      StartDate: this.StartDate,
      EndDate: this.EndDate,
      fees: this.skillData.fees,
      skillId:this.skillData.id,
      skillName : this.skillData.name,
      userId: 1,
      userName:this.yourName,
      trainerId:this.paramId,
      mentorName: this.mentorData.userName,
      email: this.mentorData.email,
      accept:false
    };
    this.myservice.sendTrainingDtls(data).subscribe(data=>
      {
        this.sentData=data;
        alert(this.sentData)     
       });
     
  }
}
