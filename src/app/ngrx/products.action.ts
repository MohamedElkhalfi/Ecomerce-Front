import {Action} from '@ngrx/store';
import { Product } from '../model/prodcut.module';

export enum ProductsActionsTypes{
    /* Get All products*/
    GET_ALL_PRODUCTS="[Products] Get All products",
    GET_ALL_PRODUCTS_SUCCESS="[Products] Get All products Success",
    GET_ALL_PRODUCTS_ERROR="[Products] Get All products Error",

   /* Get Selected products*/
    GET_SELECTED_PRODUCTS="[Products] Get Selected products",
    GET_SELECTED_PRODUCTS_SUCCESS="[Products] Get Selected products Success",
    GET_SELECTED_PRODUCTS_ERROR="[Products] Get Selected products Error",

    /* Search products*/
    SEARCH_PRODUCTS="[Products] Search products",
    SEARCH_PRODUCTS_SUCCESS="[Products] Search products Success",
    SEARCH_PRODUCTS_ERROR="[Products] Search products Error",

    /* New products*/
    New_PRODUCTS="[Products] New products",
    New_PRODUCTS_SUCCESS="[Products] New products Success",
    New_PRODUCTS_ERROR="[Products] New products Error",

    /* Save products*/
    SAVE_PRODUCTS="[Products] SAVE products",
    SAVE_PRODUCTS_SUCCESS="[Products] SAVE products Success",
    SAVE_PRODUCTS_ERROR="[Products] SAVE products Error",

     /* Save products*/
     DELETE_PRODUCTS="[Products] DELETE products",
     DELETE_PRODUCTS_SUCCESS="[Products] DELETE products Success",
     DELETE_PRODUCTS_ERROR="[Products] DELETE products Error"
  }


export class GetAllProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS;
  constructor(public payload:any) {
  }
}

export class GetAllProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetAllProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}



/* Get Selected Products Actions*/
export class GetSelectedProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS;
  constructor(public  payload:Product | null) {
  }
}

export class GetSelectedProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS;
  constructor(public payload:Product[]) {
  }
}

export class GetSelectedProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Search Products Actions*/
export class SearchroductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS;
  constructor(public  payload:String | null) {
  }
}

export class SearchProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS;
  constructor(public  payload:Product[]) {
  }
}

export class SearchProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SEARCH_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}


/* New Products Actions*/
export class NewrPoductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.New_PRODUCTS;
  constructor(public  payload:any ) {
  }
}

export class NewProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.New_PRODUCTS_SUCCESS;
  constructor(public payload:any) {
  }
}

export class NewProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.New_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}

/* Save Products Actions*/
export class SaveProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCTS;
  constructor(public  payload:Product ) {
  }
}

export class SaveProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCTS_SUCCESS;
  constructor(public payload:Number) {
  }
}

export class SaveProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.SAVE_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}


/* Delete Products Actions*/
export class DeleteProductsAction implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCTS;
  constructor(public  payload:Number ) {
  }
}

export class DeleteProductsActionSuccess implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCTS_SUCCESS;
  constructor(public payload:Number) {
  }

}

export class DeleteProductsActionError implements Action{
  type: ProductsActionsTypes=ProductsActionsTypes.DELETE_PRODUCTS_ERROR;
  constructor(public payload:string) {
  }
}
export type ProductsActions=
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError|
    GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
    SearchroductsAction | SearchProductsActionSuccess | SearchProductsActionError |
    NewrPoductsAction | NewProductsActionSuccess | NewProductsActionError |
    SaveProductsAction | SaveProductsActionSuccess | SaveProductsActionError |
    DeleteProductsAction | DeleteProductsActionSuccess | DeleteProductsActionError
;
