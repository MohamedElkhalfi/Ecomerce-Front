import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GetAllProductsAction, NewrPoductsAction, SaveProductsAction } from 'src/app/ngrx/products.action';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})

export class ProductAddComponent implements OnInit {

  constructor(private fb:FormBuilder,
              private productsService:ProductsService,
              private store: Store<any>,
              private route: Router) { }

productFormGroup?:FormGroup;
submitted:boolean=false;
readonly      ProductsStateEnum= ProductsStateEnum ;
state: ProductsState | null= null;

  ngOnInit(): void {
    this.store.dispatch(new NewrPoductsAction({}));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      {
        if(this.state.dataState === ProductsStateEnum?.NEW) {
        this.productFormGroup=this.fb.group({
          name:["",Validators.required],
          description:["",Validators.required],
          price:[0,Validators.required],
          quantity:[0,Validators.required],
          selected:[true,Validators.required],
          available:[true,Validators.required],
        });
  }

    }});
  }




  onSaveProduct() {
    this.store.dispatch(new SaveProductsAction(this.productFormGroup.value));
    this.store.dispatch(new GetAllProductsAction({}));
    this.route.navigateByUrl("/products");

  }



}
