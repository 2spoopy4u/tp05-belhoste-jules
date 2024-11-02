import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductListComponent, HeaderComponent, FooterComponent],
  //templateUrl: './app.component.html',
  template:`
  <body>
    <app-header></app-header>
    <app-product-list/>
    <app-footer></app-footer>
  </body>
  `,  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'TP03_Belhoste_Jules';
}
