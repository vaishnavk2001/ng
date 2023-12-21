import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-form',
  templateUrl: './new-form.component.html',
  styleUrls: ['./new-form.component.css']
})
export class NewFormComponent implements OnInit {

  constructor() { }
  data = {
    firstname : '',
    lastname : '',
    phone:'',
    email : ''
  }
  ngOnInit(): void {
  }
  onsubmit(){
    alert(JSON.stringify(this.data))
  }

}
