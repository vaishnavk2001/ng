import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getApi:ApicallService) { }
  postArray : any[] = []
  ngOnInit(): void {
    this.getApi.getPost().subscribe((res)=>{
      this.postArray = res
      console.log(this.postArray);
      
    })
  }

}
