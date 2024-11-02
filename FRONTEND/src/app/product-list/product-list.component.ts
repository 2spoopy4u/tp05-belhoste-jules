import { Component, OnInit } from '@angular/core';
import { BackendReaderService } from '../backend-reader.service';
import { Product } from '../product';
import { ListBrowserComponent } from '../list-browser/list-browser.component';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ListBrowserComponent,CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  productList?: Observable<Product[]>;
  constructor(private backendReader: BackendReaderService) {
    this.productList = new Observable<Product[]>();
  }
  ngOnInit() {
    this.backendReader.filter().subscribe();
    this.productList = this.backendReader.allProducts;
  }

}
