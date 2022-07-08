export class Product{
    productId!:number;
    productName!:string;
    productDescription!:string;
    cost!:string;

    constructor(productId:number,productName:string,productDescription:string,cost:string){
        this.productId = productId;
        this.productName = productName;
        this.productDescription = productDescription;
        this.cost = cost;
    }
}