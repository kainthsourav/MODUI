import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(private toast:ToastrService) { }

  ngOnInit() {
  }

  showToaster(){
    this.toast.success("Hello, I'm the toastr message.");
}
}
