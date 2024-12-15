import { Component, OnInit } from '@angular/core';
import { BackendReaderService } from '../backend-reader.service';
import { Product } from '../shared/model/product';
import { ListBrowserComponent } from '../list-browser/list-browser.component';
import { Observable, take } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Store } from '@ngxs/store';
import { AddProduct } from '../shared/action/app.action';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ListBrowserComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList: Observable<Product[]>;
  constructor(private backendReader: BackendReaderService, private store:Store) {
    this.productList = new Observable<Product[]>();
  }
  ngOnInit() {

    this.backendReader.filter().subscribe();
    this.productList = this.backendReader.allProducts;
  }
  addToCart(product:Product){
    const cartProduct = { ...product, id: Date.now() };
      this.store.dispatch(new AddProduct(cartProduct)) 
 
  }

}
