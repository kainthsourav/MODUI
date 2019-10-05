import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import{GetUsersService} from '../../../Services/get-users.service';
import * as _ from "underscore";

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  id;
  constructor(private route:ActivatedRoute,myService:GetUsersService) { }

  ngOnInit() {
    this.getQueryData();
  }

  getQueryData() {
    this.route.queryParams.subscribe(params => {
      this.id = params["ID"];
      console.log(this.id);
    });
  }

}
