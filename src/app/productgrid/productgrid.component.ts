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
truncateDescription(description: string, maxLength: number): string {
  if (description.length <= maxLength) {
    return description;
  }
  const truncated = description.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  return lastSpace === -1 ? truncated + '...' : truncated.substring(0, lastSpace) + '...';
}
  products: Product[]= [];

  ngOnInit(): void {
    this.products = this.productService.getAll();
  }
}


