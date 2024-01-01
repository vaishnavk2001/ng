import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceExampleService {
  constructor() { } 

  public array1 = [
    {id:1,name:'kasargod'},
    {id:2,name:'kannur'},
    {id:3,name:'kozhikkode'},
    {id:4,name:'wayanad'},
    {id:5,name:'malappuram'},
    {id:6,name:'palakkad'},
    {id:7,name:'trissure'},
    {id:8,name:'eranakulam'},
    {id:9,name:'kottayam'},
    {id:10,name:'idukki'},
    {id:11,name:'alappuzha'},
    {id:12,name:'kollam'},
    {id:13,name:'pathanamthitta'},
    {id:14,name:'trivandrum'}
  ]
  getDistrict(){
    return <any>this.array1
  }
}
