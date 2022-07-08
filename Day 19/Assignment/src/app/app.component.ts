import { Component } from '@angular/core';
import { ProductService } from "./product.service";
import { Product } from "./Product";
import { LoginService } from "./login.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Assignment';
  constructor(private productService: ProductService, private logger: LoginService) { }
  arrProductList: Product[] = [];
  List: Product[] = [];
  value!: number;

  getAllProductsFromService() {
    this.logger.log("Before Fetching Details from the Product Service");
    this.arrProductList = this.productService.getAllProducts();
    this.logger.log("After Fetching Details Form the Product Service");
  }

  filterId(pid: string) {
    this.value = parseInt(pid);
    this.List = [];
    for (let i = 0; i < this.arrProductList.length; i++) {
      if (this.arrProductList[i].productId == this.value) {
        this.List.push(this.arrProductList[i]);
      }
    }
    this.logger.log("After Filtering Record");
    this.arrProductList = this.List;
  }

  /* filterName(name:string){
    this.List = [];
    for(let i = 0;i<this.arrProductList.length;i++){
      if( this.arrProductList[i].productName == name ){
        this.List.push(this.arrProductList[i]);
      }
    }
    this.logger.log("After Filtering Record");
    this.arrProductList = this.List;
  } */

  filterAll(id: string, name: string, model: string, price: string) {
    this.List = [];
    this.value = parseInt(id);
    for (let i = 0; i < this.arrProductList.length; i++) {
      if (this.arrProductList[i].productName == name && this.arrProductList[i].productId == this.value && this.arrProductList[i].cost == price && this.arrProductList[i].productDescription == model) {
        this.List.push(this.arrProductList[i]);
      }
    }
    this.logger.log("After Filtering Record");
    this.arrProductList = this.List;
  }
}


