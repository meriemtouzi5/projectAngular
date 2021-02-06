import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form={
    firstName:'',
    lastName:'',
    email:'',
    phone:''
  }
  

  constructor() { }

  ngOnInit(): void {
   
  }
  log(firstName){
     console.log(this.form.firstName); 
  }
  onSubmit(f) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }
}
