import { Component } from '@angular/core';
import { products } from './Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

      productName = 'Samsung Galaxy S10';
      productDescription = 'Description about Galaxy S10';
      productPrice = 60000;
      productIsAvailable = false;
      
      
      productLists = Array<products>();
  
  createProductsList(){
    for(let i=0;i<10;i++){
      this.productLists.push(new products(`Samsung Galaxy S${i+1}`,`Description about Galaxy S${i}`,6000*(i+1),true ))
      console.log(this.productLists[i])
    }
  }
  closeProductList(){
    for(let i=0;i<10;i++){
      this.productLists.pop()
    } 
  }

  onSave() {
    console.log('Product saved...');
  }

  onSearch(e:any) {
    console.log(e.target.value);
  }
}

function closeProductList() {
  throw new Error('Function not implemented.');
}
