import { Injectable } from '@angular/core';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProductList:Product[] = [
    {productId:101,productName:"TV",productDescription:"Samsung TV",cost:55000},
    {productId:102,productName:"Mobile",productDescription:"Apple 7S",cost:45000},
    {productId:103,productName:"Washing Machine",productDescription:"LG Washing Machine",cost:35000},
    {productId:104,productName:"Fridge",productDescription:"Godrej Fridge",cost:65000}
  ]

  getAllProducts(){
    return this.arrProductList;
  }
}
