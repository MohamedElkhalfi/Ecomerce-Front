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
    New_PRODUCTS_ERROR="[Products] New products Error"
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
export class NewroductsAction implements Action{
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
export type ProductsActions=
    GetAllProductsAction | GetAllProductsActionSuccess | GetAllProductsActionError|
    GetSelectedProductsAction | GetSelectedProductsActionSuccess | GetSelectedProductsActionError |
    SearchroductsAction | SearchProductsActionSuccess | SearchProductsActionError |
    NewroductsAction | NewProductsActionSuccess | NewProductsActionError
;
