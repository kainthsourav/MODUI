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
  Update:boolean=false;
 
  Edit_Show:boolean=false;
  Delete_Show:boolean=false;

  Save_Show:boolean=true;
  Cancel_show:boolean=true;
  

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
      // console.log(this.SkillList||JSON);
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
      // console.log(this.msg);
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


Edit()
{
  this.Update=true;

  this.Edit_Show=true;
  this.Delete_Show=true;
  this.Cancel_show=false;
  this.Save_Show=false;
}

Cancel()
{
  this.Edit_Show=false;
  this.Delete_Show=false;
  this.Cancel_show=true;
  this.Save_Show=true;
  this.Update=false;
}
Save(id,toc,pre,fee)
{
  
  this.Edit_Show=false;
  this.Delete_Show=false;
  this.Cancel_show=true;
  this.Save_Show=true;
  this.Update=false;
  //Edit logic

if(id!=undefined  && toc!=undefined && pre!=undefined && fee!=undefined)
{
  const info={
    id:id,
    toc:toc,
    prerequisites:pre,
    fees:fee,
    };

    this.ServiceSkill.UpdateSkill(info).subscribe(data=>{
      alert(data);
      this.GetAllSkills();
    });

    
}
else
{
alert("Invalid data entered")
}

  
  
}
}
