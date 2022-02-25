import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import { Product } from 'src/app/model/prodcut.module';
import { GetAllProductsAction, GetSelectedProductsAction, SearchroductsAction } from 'src/app/ngrx/products.action';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  constructor(private store:Store<any>, private route: Router) { }

  ngOnInit(): void {
  }


  onGetAllProducts() {
    this.store.dispatch(new GetAllProductsAction({}));
    this.route.navigateByUrl("/products");

  }
  onSearch(f: any) {
    this.store.dispatch(new SearchroductsAction(f.keyword));
  }

  onNewProduct()
  {
    this.route.navigateByUrl("/newProduct");
  }
}
