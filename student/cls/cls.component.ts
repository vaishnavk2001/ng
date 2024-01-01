import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';
@Component({
  selector: 'app-cls',
  templateUrl: './cls.component.html',
  styleUrls: ['./cls.component.css']
})
export class ClsComponent implements OnInit {

  constructor(private fb :FormBuilder) { }
  student = this.fb.group({
    name : [''],
    cls : [''],
    age : [''],
    sub : [''],
    mark : [''],
    std : this.fb.array([''])
  })

  get std(){
    return this.student.get('std') as FormArray
  }
  addSubject(){
    console.log(this.std);
    this.std.push(this.fb.control(''))
    console.log(this.fb.control(''));
  }
  
  onSubmit(values :any){
    console.log(values.value);
    
  }

  ngOnInit(): void {
  }

}
