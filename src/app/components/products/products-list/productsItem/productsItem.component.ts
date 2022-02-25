import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { delay } from 'rxjs';
import { Product } from 'src/app/model/prodcut.module';
import { DeleteProductsAction, GetAllProductsAction, GetSelectedProductsAction } from 'src/app/ngrx/products.action';

@Component({
  selector: 'app-productsItem',
  templateUrl: './productsItem.component.html',
  styleUrls: ['./productsItem.component.css']
})
export class PrdouctsItemComponent implements OnInit {
  @Input() product:Product|null=null;
  constructor(private store:Store<any>, private route: Router) { }

ngOnInit(): void {
}

  onGetSelectedProducts(p: Product| null) {
    this.store.dispatch(new GetSelectedProductsAction(this.product));
  }


  onDelete(idProduct: number ) {
    this.store.dispatch(new DeleteProductsAction(idProduct));
    this.route.navigateByUrl("/products");
  }

  onEdit(idProduct: number| null) {

  }
}
