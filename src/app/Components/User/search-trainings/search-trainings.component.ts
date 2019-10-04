import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../../Services/get-users.service';

@Component({
  selector: 'app-search-trainings',
  templateUrl: './search-trainings.component.html',
  styleUrls: ['./search-trainings.component.css']
})
export class SearchTrainingsComponent implements OnInit {

  SKillData;
  Technology:any;
  Timings:any;
  msg;
  show:boolean=false;
  show_nodata:boolean=false;

  constructor(private SearchTrainingService:GetUsersService) {
    this.SearchTrainingService.AllSkills().subscribe(data=>{
      this.SKillData=data;
      console.log(this.SKillData);
    });
   }

  ngOnInit() 
  { }


  //Search Trainings

  Find()
  {
    if(this.Technology!=undefined && this.Timings!=undefined)
    {
    const data={
      id:this.Technology,
      timings:this.Timings
    };
   console.log(data);

    this.SearchTrainingService.SearchTrainings(JSON.stringify(data)).subscribe(data=>{
      this.msg=data;
      console.log(Object.keys(this.msg).length);
      // alert(this.msg);
      if(Object.keys(this.msg).length>0)
      {
        this.show=true;
        this.show_nodata=false;
      }
      else
      {
        this.show=false;
        this.show_nodata=true;
      }
    });
    }
    else
    {
      alert("Please Select Technology and Timings");
    }
  }
}
