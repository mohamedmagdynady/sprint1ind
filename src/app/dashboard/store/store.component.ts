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
		this._storeService.getProducts()
		.subscribe(res => this.products = res)

	}
  ngOnInit() {
  }

}
