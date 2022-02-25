import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {catchError, map, Observable, of, startWith} from 'rxjs';
import { Product } from 'src/app/model/prodcut.module';
import { GetAllProductsAction } from 'src/app/ngrx/products.action';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';
import { AppDataState, DataStateEnum } from '../../state/product.state';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsState$:Observable<ProductsState>|null=null;
  readonly ProductsStateEnum= ProductsStateEnum ;
  constructor(private store:Store<any>) {
    console.log("cons");
    this.store.dispatch(new GetAllProductsAction({}));
   }
  ngOnInit(): void {

    this.productsState$=this.store.pipe(
      map((state)=>  state.catalogState )
    );
  }
}
