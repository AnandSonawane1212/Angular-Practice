export class products{
    productName:string;
    productDescription:string;
    productPrice:number;
    
    productIsAvailable:boolean
    constructor(productName:string,
        productDescription:string,
        productPrice:number,
        productIsAvailable:boolean)
        {
            this.productName = productName,
            this.productDescription = productDescription,
            this.productPrice = productPrice,
            this.productIsAvailable = productIsAvailable
    }


}