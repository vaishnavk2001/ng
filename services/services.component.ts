import { Component, OnInit } from '@angular/core';
import { ServiceExampleService } from '../service-example.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private ser :ServiceExampleService) { }
  public comp1:any = []

  ngOnInit(): void {
    this.comp1 = this.ser.getDistrict()
    console.log(this.comp1);
    
  }

}
