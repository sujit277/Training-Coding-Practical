import { Injectable } from '@angular/core';
import {Product} from "./Product"
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  arrProductList:Product[] = [
    {productId:101,productName:"TV",productDescription:"Samsung TV",cost:"55000"},
    {productId:102,productName:"Mobile",productDescription:"Apple 7S",cost:"45000"},
    {productId:103,productName:"Washing Machine",productDescription:"LG Washing Machine",cost:"15000"},
    {productId:104,productName:"Fridge",productDescription:"Godrej Fridge",cost:"40000"},
    {productId:105,productName:"Chair",productDescription:"NeelKamal Chair",cost:"200"},
    {productId:106,productName:"Furniture",productDescription:"Futura Furniture",cost:"20000"},
    {productId:107,productName:"Car",productDescription:"Lamborgini",cost:"10000000"},
    {productId:108,productName:"Bike",productDescription:"Apache 200",cost:"150000"}
  ]

  getAllProducts(){
    return this.arrProductList;
  }
}
