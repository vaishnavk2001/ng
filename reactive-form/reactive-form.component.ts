import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  constructor(private fb:FormBuilder){}
  //schema//
  registrationForm = this.fb.group({
    firstName : ['',Validators.required],
    lastName : ['',Validators.required],
    email:['',[Validators.required,Validators.email]],
    phone:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
  })
  get f(){
    return this.registrationForm.controls
  }
  submit = false
  onsubmit(){
    this.submit = true
    console.log('button clicked')
    console.log(this.f)
    alert(JSON.stringify(this.registrationForm))
  }


  ngOnInit(): void {
  }

}
