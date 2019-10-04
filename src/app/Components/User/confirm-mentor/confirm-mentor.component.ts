import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{GetUsersService} from '../../../Services/get-users.service';


@Component({
  selector: 'app-confirm-mentor',
  templateUrl: './confirm-mentor.component.html',
  styleUrls: ['./confirm-mentor.component.css']
})
export class ConfirmMentorComponent implements OnInit {

  QueId;
  QueTech;
  MyData;
  timeSlot;
 
  userName;
  mentorName;

  constructor(private route: ActivatedRoute,private Service:GetUsersService) {
    this.route.queryParams.subscribe(params => {
      this.QueId=params['ID'];
      console.log(this.QueId);
    });
   
       this.Service.GetUserById(this.QueId).subscribe(data=>{
        this.MyData=data;
      
        console.log(this.MyData);
      });
   }

  ngOnInit() {
  }


  
  

}
