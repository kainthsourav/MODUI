import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../../Services/get-users.service';

@Component({
  selector: 'app-search-trainings',
  templateUrl: './search-trainings.component.html',
  styleUrls: ['./search-trainings.component.css']
})
export class SearchTrainingsComponent implements OnInit {

  SKillData;
  constructor(private SearchTrainingService:GetUsersService) {
    this.SearchTrainingService.AllSkills().subscribe(data=>{
      this.SKillData=data;
      console.log(this.SKillData);
    })
   }

  ngOnInit() 
  { }

}
