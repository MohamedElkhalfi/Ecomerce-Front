import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from 'src/app/model/prodcut.module';
import { GetSelectedProductsAction } from 'src/app/ngrx/products.action';

@Component({
  selector: 'app-productsItem',
  templateUrl: './productsItem.component.html',
  styleUrls: ['./productsItem.component.css']
})
export class PrdouctsItemComponent implements OnInit {
  @Input() product:Product|null=null;
  constructor(private store:Store<any>) { }

ngOnInit(): void {
}

  onGetSelectedProducts(p: Product| null) {
    this.store.dispatch(new GetSelectedProductsAction(this.product));
  }


  onDelete(idProduct: number | null) {

  }

  onEdit(idProduct: number| null) {

  }
}
