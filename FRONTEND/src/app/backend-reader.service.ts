import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './product';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendReaderService {
  private produitSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public allProducts: Observable<Product[]> = this.produitSubject.asObservable();
  private refFilter:string='';
  private libelleFilter:string='';
  private priceFilter:string='';

  constructor(private http: HttpClient) { 
  }
  public getJSON(): Observable<any> {
    return this.http.get("./assets/Product.json");
}
public setFilter(name:string,value:string){
  this[name as 'refFilter'|'libelleFilter'|'priceFilter' ] = value;
}
public filter(){
  return this.getJSON().pipe(
    map((products: Product[]) =>{
    return products.filter(product =>{
      let res = true;
      res=res && (product.ref.indexOf(this.refFilter) != -1);
      res=res && product.libelle.indexOf(this.libelleFilter) > -1;
      res=res && product.prix.toString().indexOf(this.priceFilter) > -1;

      return res;
  });
  
  }), 
  map((filteredProduits: Product[]) => {
    this.produitSubject.next(filteredProduits);
    return filteredProduits;
  })
  )
}
}
