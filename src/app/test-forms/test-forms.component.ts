import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl,FormBuilder,Validators} from '@angular/forms';

@Component({
  selector: 'app-test-forms',
  templateUrl: './test-forms.component.html',
  styleUrls: ['./test-forms.component.css']
})
export class TestFormsComponent implements OnInit {
  myForm: FormGroup;

  submittry:boolean=false;

  constructor(private fb:FormBuilder) { 
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required,Validators.pattern('[a-z0-9.@]*')]],
      message: ['', [Validators.required]]
  });
  }

  ngOnInit() {
  
  }
  onSubmit(form: FormGroup) {
    if(this.myForm.valid)
    {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.name);
    console.log('Email', form.value.email);
    console.log('Message', form.value.message);
    this.submittry=true;
    }
    else{
      this.submittry=false;
    }
  }
}
