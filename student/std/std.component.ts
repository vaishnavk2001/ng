import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-std',
  templateUrl: './std.component.html',
  styleUrls: ['./std.component.css']
})
export class StdComponent implements OnInit {
  showForm = false
  constructor(private fb : FormBuilder) { }
  form:FormGroup = this.fb.group({
    name : [''],
    email:[''],
    city:[''],
    contacts : this.fb.array([
      this.fb.group({
        number : [''],
        type : [''],
        description : ['']
      })
    ])  

  })
  get contacts(){
    return this.form.get('contacts') as FormArray
  }
  addSub(){
    this.contacts.push(
      this.fb.group({
        number : [''],
        type :[''],
        description : ['']
      })
    )
  }
  ngOnInit(): void {
  }


}
