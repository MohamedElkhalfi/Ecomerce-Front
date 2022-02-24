import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import { ProductsService } from "../services/products.service";
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';

import { GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, NewProductsActionSuccess, ProductsActions, ProductsActionsTypes, SearchProductsActionError, SearchProductsActionSuccess } from "./products.action";

@Injectable()
export class ProductsEffects {
  constructor(private productService:ProductsService, private effectActions:Actions) {
  }

  getAllProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.GET_ALL_PRODUCTS),
      switchMap  ((action)=>{


            return this.productService.getAllProducts()
              .pipe(
                map((products)=> new GetAllProductsActionSuccess(products)),
                catchError((err)=>of(new GetAllProductsActionError(err.message)))
              )
      })
    )
  );

 /* Get Selected Products*/
 getSelectedProductsEffect:Observable<ProductsActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.GET_SELECTED_PRODUCTS),
    mergeMap((action: ProductsActions)=>{
      console.log("effect " + action.payload);
      return this.productService.getSelectedProducts( action.payload)
        .pipe(
          map((products)=> new GetSelectedProductsActionSuccess(products)),
          catchError((err)=>of(new GetSelectedProductsActionError(err.message)))
        )
    })
  )
);

 /* Search Products*/
 SearchProductsEffect:Observable<ProductsActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.SEARCH_PRODUCTS),
    mergeMap((action: ProductsActions)=>{
      return this.productService.getProductsByKeyword( action.payload)
        .pipe(
          map((prodcuts)=> new SearchProductsActionSuccess(prodcuts)),
          catchError((err)=>of(new SearchProductsActionError(err.message)))
        )
    })
  )
);

 /* Search Products*/
 NewProductsEffect:Observable<ProductsActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.New_PRODUCTS),
    map((action: ProductsActions)=>{
      return new NewProductsActionSuccess({});
    })
  )
);

}
