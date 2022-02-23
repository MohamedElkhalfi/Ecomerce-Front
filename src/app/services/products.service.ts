import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Product } from '../model/prodcut.module';

@Injectable({providedIn:"root"})
export class ProductsService {
  constructor(private http:HttpClient) {
    console.log("const");
  }
host = environment.host;
getAllProducts() : Observable<Product[]> {
  console.log("Service " + this.http.get<Product[]>(this.host+"/ViewAllProducts"));

  return this.http.get<Product[]>(this.host+"/api/ViewAllProducts");
}

getSelectedProducts(product:Product):Observable<Product[]>{
  console.log("getSelectedProducts " + JSON.stringify(product));
  console.log("getSelectedProducts " + JSON.stringify(product.selected));

  let selected=!product.selected;
  return this.http.get<Product[]>(`${this.host}/api/UpdateProductSelected?idProduct=${product.id}&selected=${selected}`, {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })

  });

}

deleteProduct(product: Product): Observable<void> {
  return this.http.delete<void>(this.host+'/api/DeleteProductAsync/'+product.id, {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })

  });

}

// save(product:Product):Observable<Product>{
//   let host=environment.host;
//   return this.http.post<Product>(host+"/products",product);
// }


}
