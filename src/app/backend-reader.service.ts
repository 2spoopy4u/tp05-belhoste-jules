import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class BackendReaderService {
  productList: Product[];

  constructor(private http: HttpClient) { }
  loadNavItems() {
    this.productList = this.http.get("../data/navItems.json")
      .map(res => res.json())
      .do(data => console.log(data));
    // This is optional. You can remove the last line
    // if you don't want to log the loaded JSON file 
    // in the console.
  }
}
