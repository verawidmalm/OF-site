import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-productgrid',
  templateUrl: './productgrid.component.html',
  styleUrls: ['./productgrid.component.css']
})
export class ProductgridComponent implements OnInit{

constructor(private productService: ProductService){

}
  products: Product[]= [];

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}


