import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/prodcut.module';

@Component({
  selector: 'app-prdouct-item',
  templateUrl: './prdouct-item.component.html',
  styleUrls: ['./prdouct-item.component.css']
})
export class PrdouctItemComponent implements OnInit {
  @Input() product:Product|null=null;
  constructor() { }

  ngOnInit(): void {
  }

}
