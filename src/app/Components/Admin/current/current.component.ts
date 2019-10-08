import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service';
@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {

  CurrentTrainings;
  constructor(private myService:GetUsersService) { }

  ngOnInit() {
    this.getAllTrainings();
  }


  getAllTrainings()
  {
    this.myService.trainingApprovals().subscribe(data=>
      {
        this.CurrentTrainings=data;
        console.log(this.CurrentTrainings);
      });
  }
}
