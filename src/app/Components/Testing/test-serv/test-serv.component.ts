import { Component, OnInit } from '@angular/core';
import{GetUsersService} from '../../../Services/get-users.service';

@Component({
  selector: 'app-test-serv',
  templateUrl: './test-serv.component.html',
  styleUrls: ['./test-serv.component.css']
})
export class TestServComponent implements OnInit {

  list;
  constructor(private _service:GetUsersService) { }

  ngOnInit() {
    this._service.GetAll().subscribe((data)=>this.list=data)
    
  }
}
