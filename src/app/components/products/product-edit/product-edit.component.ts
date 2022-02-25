import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { EditProductsAction } from 'src/app/ngrx/products.action';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  state$:ProductsState|null=null;
  productID : number;
readonly ProductsStateEnum= ProductsStateEnum ;
productFormGroup?:FormGroup;
formBuild: boolean = false;
  constructor(private fb:FormBuilder,
              private productsService:ProductsService,
              private store: Store<any>,
              private routeActived: ActivatedRoute) {
                console.log("id " + routeActived.snapshot.params.id);
this.productID = +routeActived.snapshot.params.id;

              }

ngOnInit(): void {
 this.store.dispatch(new EditProductsAction(this.productID));
 console.log("productID " + JSON.stringify(this.productID)  );

  this.store.subscribe(state=> {
    this.state$ = state.catalogState;
 console.log("produthis.state$ctID " + JSON.stringify(this.state$)  );

    if(this.state$.dataState ===  ProductsStateEnum.LOADED  )
    {
      console.log("this.state$.currentProduct.id " + JSON.stringify(this.state$.currentProduct)  );

      this.productFormGroup=this.fb.group({
        id: [ this.state$.currentProduct.id],
        name:[ this.state$.currentProduct.name],
        description:[""],
        price:[ this.state$.currentProduct.currentPrice],
        quantity:[ this.state$.currentProduct.quantity],
        selected:[ this.state$.currentProduct.selected],
        available:[ this.state$.currentProduct.available],
      });
 console.log("productFormGroup " + JSON.stringify(this.productFormGroup.controls.price.value)  );

      this.formBuild = true;
    }

  });

}


onEditProduct (){

}
}
