export class Product{
    productId!:number;
    productName!:string;
    productDescription!:string;
    cost!:number;

    constructor(productId:number,productName:string,productDescription:string,cost:number){
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.cost = cost;
    }
}