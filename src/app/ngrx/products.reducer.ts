import { Action } from "@ngrx/store";
import { Product } from "../model/prodcut.module";
import { ProductsActions, ProductsActionsTypes } from "./products.action";


export enum ProductsStateEnum{
  LOADING="LOADING",
  LOADED="LOADED",
  ERROR="ERROR",
  INITIAL="INITIAL",
  NEW= "NEW",
  EDIT="EDIT",
  UPDATED = "UPDATED"
}

export interface ProductsState{
  products:Product[],
  errorMessage:string,
  dataState:ProductsStateEnum,
  currentProduct: Product | null
}

//pour initialiser la state
const initState:ProductsState={
  products:[],
  errorMessage:"",
  dataState:ProductsStateEnum.INITIAL,
  currentProduct: null
}

export function productsReducer(state=initState, action:Action):ProductsState {
  switch (action.type) {
    case ProductsActionsTypes.GET_ALL_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionsTypes.GET_ALL_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_ALL_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
    /* Get Selected Products*/
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}
   /* Search Products*/
    case ProductsActionsTypes.SEARCH_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionsTypes.SEARCH_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.LOADED, products:(<ProductsActions>action).payload}
    case ProductsActionsTypes.GET_SELECTED_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

         /* New Products*/
    case ProductsActionsTypes.New_PRODUCTS:
      return {...state, dataState:ProductsStateEnum.LOADING }
    case ProductsActionsTypes.New_PRODUCTS_SUCCESS:
      return {...state, dataState:ProductsStateEnum.NEW }
    case ProductsActionsTypes.New_PRODUCTS_ERROR:
      return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

  /* Save Products*/
  case ProductsActionsTypes.SAVE_PRODUCTS:
    return {...state, dataState:ProductsStateEnum.LOADING }
  case ProductsActionsTypes.SAVE_PRODUCTS_SUCCESS:
  //  let prods: Product[]=[...state.products];
  //  prods.push((<ProductsActions>action).payload);
    return {...state, dataState:ProductsStateEnum.LOADED }
  case ProductsActionsTypes.SAVE_PRODUCTS_ERROR:
    return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

  /* Delete Products*/
  case ProductsActionsTypes.DELETE_PRODUCTS:
    return {...state, dataState:ProductsStateEnum.LOADING }
  case ProductsActionsTypes.DELETE_PRODUCTS_SUCCESS:
    return {...state, dataState:ProductsStateEnum.LOADED }
  case ProductsActionsTypes.DELETE_PRODUCTS_ERROR:
    return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

  /* Edit Products*/
  case ProductsActionsTypes.EDIT_PRODUCTS:
    return {...state, dataState:ProductsStateEnum.LOADING }
  case ProductsActionsTypes.EDIT_PRODUCTS_SUCCESS:
    return {...state, dataState:ProductsStateEnum.LOADED, currentProduct:(<ProductsActions>action).payload   }
  case ProductsActionsTypes.EDIT_PRODUCTS_ERROR:
    return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

   /* Update Products*/
   case ProductsActionsTypes.UPDATE_PRODUCTS:
    return {...state, dataState:ProductsStateEnum.LOADING }
  case ProductsActionsTypes.UPDATE_PRODUCTS_SUCCESS:
    return {...state, dataState:ProductsStateEnum.LOADED  }
  case ProductsActionsTypes.UPDATE_PRODUCTS_ERROR:
    return {...state, dataState:ProductsStateEnum.ERROR, errorMessage:(<ProductsActions>action).payload}

    default : return {...state}
  }
}
