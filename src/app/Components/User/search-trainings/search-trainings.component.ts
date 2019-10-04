import { Component, OnInit } from '@angular/core';
import { GetUsersService } from '../../../Services/get-users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-trainings',
  templateUrl: './search-trainings.component.html',
  styleUrls: ['./search-trainings.component.css']
})
export class SearchTrainingsComponent implements OnInit {

  SKillData;
  Technology:any;
  // Timings:any;
  msg;
  show:boolean=false;
  show_nodata:boolean=false;

  constructor(private SearchTrainingService:GetUsersService,private Route:Router) {
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
    // this.Timings!=undefined
    if(this.Technology!=undefined)
    {
   console.log(this.Technology);

    this.SearchTrainingService.SearchTrainings(this.Technology).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
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

//
  SendToMentor(id)
  {
  
   const data={
     ID:id
    //  Technology:this.Technology
  };

   this.Route.navigate(['/ConfirmMentor'],{queryParams:data});
  }
}
