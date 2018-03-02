import { Component, OnInit } from '@angular/core';

import {StoreService} from '../../store.service';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']

})
export class StoreComponent implements OnInit {
	products: Array<any>;
	constructor(private _storeService: StoreService){


	}
  ngOnInit() {
  		this.refreshProducts();
  }
  refreshProducts(){
    		this._storeService.getProducts()
		.subscribe(res => this.products = res);
  }
  deleteProduct(product){
  this._storeService.deleteProduct(product)
		.subscribe((res:any) => {this._storeService.getProducts().subscribe(res => this.products = res)});
  }
createProduct(n,p,s){
var product={
	name:n,
	price:p,
	sellername:s
};
	this._storeService.createProduct(product).subscribe(res =>this.products.push(res.data) );
}
updateProduct(id){
	var newName = prompt("Please enter the new product name", "Harry Potter");
	var newPrice = prompt("Please enter the new product price", "999");
	this._storeService.updateProduct(id,newName,newPrice).subscribe(res => this.refreshProducts(););

}

}
