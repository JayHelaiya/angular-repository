import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  form : FormGroup;

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.buildLoginForm()
  }

  buildLoginForm(){
    this.form = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required], 
    });
  }

  login(){
    if(this.form.valid){
      debugger
      console.log(JSON.stringify(this.form.value));
      this.form.reset();
    }

  }
}

