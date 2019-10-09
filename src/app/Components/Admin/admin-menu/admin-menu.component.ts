import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service'
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  SkillList;
  msg;
  prerequisites;
  name;
  toc;
  status;
  fees;


  constructor(private ServiceSkill:GetUsersService,private router:Router) {
    if(localStorage.getItem("adminid")==undefined)
    {
      alert("Please login");
      this.router.navigate(['login']);
    } 
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
      fees:this.fees,
      };

    if(this.name!=undefined && this.toc!=undefined && this.prerequisites!=undefined && this.fees!=undefined)
    {
       this.ServiceSkill.AddSkill(JSON.stringify(info)).subscribe(data=>{
      this.msg=data;
      alert(this.msg.message);
      console.log(this.msg);
      this.name="";
      this.toc="";
      this.prerequisites="";
      this.fees="";
      this.GetAllSkills();
    });
     }

     else
     {
       alert("Fields cannot be empty");
     }
  }

  logout()
{
  localStorage.removeItem("adminid");
 this.router.navigate(['login']);
 alert("Successfully logged out");
}

}
