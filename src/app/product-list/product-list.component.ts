import { Component } from '@angular/core';
import { BackendReaderService } from '../backend-reader.service';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  constructor(private backendReader: BackendReaderService) { }

}
