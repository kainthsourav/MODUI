import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service'

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  SkillList;
  msg;
  prerequisites;
  // timings;
  name;
  toc;
  status;


  constructor(private ServiceSkill:GetUsersService) {
    this.GetAllSkills();
   }

  ngOnInit() {
 
  }


  GetAllSkills()
  {
    this.ServiceSkill.AllSkills().subscribe(data=>{
      this.SkillList=data;
      console.log(this.SkillList||JSON);
    });
  }

  Delete(id)
  {
   
    this.ServiceSkill.DeleteSkill(id).subscribe(data=>{
      this.msg=data;
      alert(this.msg);
      // console.log(this.msg);
      this.GetAllSkills();
    });
   
  
  }

  Add()
  {
   
    const info={
      name:this.name,
      toc:this.toc,
      prerequisites:this.prerequisites,
      // timings:this.timings
               };

    this.ServiceSkill.AddSkill(JSON.stringify(info)).subscribe(data=>{
      this.msg=data;
      console.log(this.msg);
      this.name="";
      this.toc="";
      this.prerequisites="";
      // this.timings="";
      this.GetAllSkills();
    });
  }

  

}
