import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { NewroductsAction } from 'src/app/ngrx/products.action';
import { ProductsState, ProductsStateEnum } from 'src/app/ngrx/products.reducer';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup?:FormGroup;
  submitted:boolean=false;
  readonly productsStateEnum : ProductsStateEnum | null= null;
  state: ProductsState | null= null;

  constructor(private fb:FormBuilder,
              private productsService:ProductsService,
              private store: Store<any>) { }

  ngOnInit(): void {
    this.store.dispatch(new NewroductsAction({}));
    this.store.subscribe(state => {
      this.state = state.catalogState;
      if(this.state?.dataState ==  this.productsStateEnum?.NEW) {
        this.productFormGroup=this.fb.group({
          name:["",Validators.required],
          price:[0,Validators.required],
          quantity:[0,Validators.required],
          selected:[true,Validators.required],
          available:[true,Validators.required],
        });

      }

    });

  }

  onSaveProduct() {
  //   this.submitted=true;
  //   if(this.productFormGroup?.invalid) return;
  //   this.productsService.save(this.productFormGroup?.value)
  //     .subscribe(data=>{
  //       alert("Success Saving product");
  //     });
  // }
}
}
