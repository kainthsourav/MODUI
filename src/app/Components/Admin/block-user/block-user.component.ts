import { Component, OnInit } from '@angular/core';
import {GetUsersService} from '../../../Services/get-users.service'
import {Route, Router} from '@angular/router'
@Component({
  selector: 'app-block-user',
  templateUrl: './block-user.component.html',
  styleUrls: ['./block-user.component.css']
})
export class BlockUserComponent implements OnInit {

  list;
  msg;

  constructor(private _service:GetUsersService,private route:Router) { 
    this._service.GetAll().subscribe((data)=>this.list=data);
  
  }

  ngOnInit() {
   
 
  }

  Unblock(id:any)
  {
   this._service.Unblock(id).subscribe((data)=>this.msg=data);
   alert("Unlocked No "+id);
  //  this.route.navigate(['/blockuser']);
  }

  Block(id:any)
  {
    this._service.Block(id).subscribe((data)=>this.msg=data);
    alert("Blocked No "+id);
    // this.route.navigate(['/blockuser']);
  }

}
