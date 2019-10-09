import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";
import * as moment from 'moment';
import { Router } from '@angular/router';


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
  constructor(private route: ActivatedRoute, private myservice:GetUsersService,private router:Router) {
    if(localStorage.getItem("userid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    }
  }

  ngOnInit() {
    let i= localStorage.getItem("userid");
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

    let Date1 = moment(this.StartDate).format("DD-MM-YYYY");
    let Date2 = moment(this.EndDate).format("DD-MM-YYYY");
    function compare(Date1, Date2)
     {
      var a = moment(Date1, "DD/MM/YYYY");
      var b = moment(Date2, "DD/MM/YYYY");
      if (a >b) 
      {
        return 1;
      }
      else if (a < b) 
      {
        return -1;
      }
      else 
      {
        return 0;
      }
    }

    let dateNum = compare(Date1, Date2);

    if (dateNum == 1)
    {
      alert("End date should be greater than start date");
    } 
    else if (dateNum == 0) 
    {
      alert("Start date and End date same");
    } 
    else 
    {
    let Date_Start=moment(this.StartDate).format("DD-MM-YYYY");
    let Date_End=moment(this.EndDate).format("DD-MM-YYYY");
    
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
        if(this.sentData=="Sent")
        {
          this.router.navigate(['ViewRequest']);
        }
       });
   }
  } 
}
