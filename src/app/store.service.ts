import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class StoreService {
	result:any;
  constructor(private _http: Http) { }

  getProducts(){
  	return this._http.get("http://localhost:3000/api/product/getProducts")
  	.map(result => this.result = result.json().data);

  }
}
