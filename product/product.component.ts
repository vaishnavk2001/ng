import { Component, OnInit } from '@angular/core';
import { ApicallService } from '../apicall.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  imgUrl :string | undefined;
  constructor(private productApi : ApicallService,private router:Router) { }
  product:any =[] 
  ngOnInit(): void {
    this.productApi.getProduct().subscribe((res)=>{
      this.product = res.products
      console.log(this.product);
      
    })
  }
  viewProduct(){
    this.router.navigate(['/view_product']);
  }
}
