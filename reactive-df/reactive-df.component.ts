import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-reactive-df',
  templateUrl: './reactive-df.component.html',
  styleUrls: ['./reactive-df.component.css']
})
export class ReactiveDfComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  registration = this.fb.group({
    email : [''],
    alternativeEmail : this.fb.array([])
  })
  
  get alternativeEmail(){
    return this.registration.get('alternativeEmail') as FormArray
  }
  addalternativeEmail(){
    console.log(this.alternativeEmail)
    this.alternativeEmail.push(this.fb.control(''))
    console.log(this.fb.control(''));
    
  }
  onSubmit(values : any){
    console.log(values.value);
  }
  
  ngOnInit(): void {
  }

}
