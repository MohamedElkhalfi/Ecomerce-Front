import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {Action} from '@ngrx/store';
import { ProductsService } from "../services/products.service";
import {catchError, map, mergeMap, switchMap} from 'rxjs/operators';

import { DeleteProductsActionError, DeleteProductsActionSuccess, EditProductsActionError, EditProductsActionSuccess, GetAllProductsActionError, GetAllProductsActionSuccess, GetSelectedProductsActionError, GetSelectedProductsActionSuccess, NewProductsActionSuccess, ProductsActions, ProductsActionsTypes, SaveProductsActionError, SaveProductsActionSuccess, SearchProductsActionError, SearchProductsActionSuccess } from "./products.action";

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

 /* Save Products*/
 SaveProductsEffect:Observable<ProductsActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.SAVE_PRODUCTS),
    mergeMap((action: ProductsActions)=>{
      return this.productService.save( action.payload)
        .pipe(
          map((prodcuts)=> new SaveProductsActionSuccess(prodcuts)),
          catchError((err)=>of(new SaveProductsActionError(err.message)))
        )
    })
  )
);

 /* Delete Products*/
 DeleteProductsEffect:Observable<ProductsActions>=createEffect(
  ()=>this.effectActions.pipe(
    ofType(ProductsActionsTypes.DELETE_PRODUCTS),
    switchMap((action: ProductsActions)=>{
      return this.productService.deleteProduct( action.payload)
        .pipe(
          map((prodcuts)=> new  DeleteProductsActionSuccess(prodcuts)),
          catchError((err)=>of(new DeleteProductsActionError(err.message)))
        )
    }),
    switchMap  ((action)=>{
      return this.productService.getAllProducts()
        .pipe(
          map((products)=> new GetAllProductsActionSuccess(products)),
          catchError((err)=>of(new GetAllProductsActionError(err.message)))
        )
    })
  )
 );

  /* Edit Products*/
  editProductsEffect:Observable<ProductsActions>=createEffect(
    ()=>this.effectActions.pipe(
      ofType(ProductsActionsTypes.EDIT_PRODUCTS),
      mergeMap((action: ProductsActions)=>{
        return this.productService.getProductById( action.payload)
          .pipe(
            map((products)=> new EditProductsActionSuccess(products)),
            catchError((err)=>of(new EditProductsActionError(err.message)))
          )
      })
    )
  );

}
