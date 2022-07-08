import { Component } from '@angular/core';
import {ProductService} from "./product.service";
import {Product}  from "./Product"
import {LoginService} from "./login.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  arrProductList:Product[] = []

  constructor(private productService:ProductService,private logger:LoginService){
  }

  getAllProductsFromService(){
    this.logger.log("Before Fetching Details from the Product Service");
    this.arrProductList = this.productService.getAllProducts();
    this.logger.log("After Fetching Details Form the Product Service");
  }
}
