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
  let selected=!product.selected;
  return this.http.get<Product[]>(`${this.host}/api/UpdateProductSelected?idProduct=${product.id}&selected=${selected}`, {
    headers: new HttpHeaders({
      'Content-Type' : 'application/json'
    })

  });

}

deleteProduct(productID: Number): Observable<Number> {
  return this.http.delete<Number>(this.host+"/api/DeleteProductAsync?productID="+productID);

}

getProductsByKeyword(keyword: string) : Observable<Product[]> {
  return this.http.get<Product[]>(this.host+"/api/FindProductsByName?keyword="+keyword);
}

save(product:Product):Observable<Number>{
  console.log(" save " + JSON.stringify(product));
  return this.http.post<Number>(this.host+"/api/CreateProducts",product);

}

getProductById (productID: Number): Observable<Product> {
  console.log(" save " + JSON.stringify(productID));
  return this.http.get<Product>(this.host+"/api/FindProductsByIdAsync?productID="+productID);
}
}
