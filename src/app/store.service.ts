import { Injectable } from '@angular/core';
import { Http,Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {
	result:any;
  constructor(private _http: Http) { }

  getProducts(){
  	return this._http.get("http://localhost:3000/api/product/getProducts")
  	.map(result => this.result = result.json().data);

  }
deleteProduct(product){
	return this._http.delete("http://localhost:3000/api/product/deleteProduct/" + product._id).map(res => res.json());
}
updateProduct(id, nameT, priceT){
	let tempProduct = {
		name: nameT,
		price: priceT
	};
	return this._http.patch("http://localhost:3000/api/product/updateProduct/" + id, tempProduct ).map(res => res.json());
}
createProduct(product){
	console.log('stop');
	//this._headers.append('Content-Type', 'application/json');
	let headers = new Headers();
	headers.append('Content-Type' , 'application/json');
	return this._http.post("http://localhost:3000/api/product/createProduct/",product,{headers : headers}).map(res => res.json());
}

} 
