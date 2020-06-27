import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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
