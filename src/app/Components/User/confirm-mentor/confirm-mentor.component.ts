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

  paramId;
  trainerTechnology;
  mentorData;
  skillData;
  skill;
  showRequestedCourse;

  Time;
  StartDate;
  EndDate;
  userName;
  email;
  name;
  fees;
  prerequisites;
  yourName;
  request;
  sentData;
  CurrentUser;
  constructor(private route: ActivatedRoute, private myservice:GetUsersService) {}

  ngOnInit() {
    let i= localStorage.getItem("Id");
    this.CurrentUser= +i;

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
      console.log("mentor :"+this.mentorData.userName);
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
    const dat = {

      startDate:this.StartDate,
      endDate:this.EndDate,
      timeSlot:this.Time,
      accept:false,
      userId:this.CurrentUser,
      userName:"Sourav",
      mentorId:this.paramId,
      skillId:this.skillData.id,
      skillname:this.skillData.name,
      rejected :false,
      mentorName:this.mentorData.userName,

    };
     console.log(dat);
    this.myservice.sendTrainingDtls(dat).subscribe(data=>
      {
        this.sentData=data;
        alert(this.sentData)     
       });
     
  }
}
