import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  product!: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) {}

  onBackClick(): void {
    this.router.navigate(['/']); 
  }
  

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId !== null) {
      const parsedId = parseInt(productId, 10);
      if (!isNaN(parsedId)) {
        const product = this.productService.getProduct(parsedId);
        if (product !== null) {
          this.product = product;
        } else {
          console.error(`Could not find product with ID ${parsedId}`);
        }
      } else {
        console.error(`Invalid product ID ${productId}`);
      }
    } else {
      console.error(`Product ID is null`);
    }
  }
}

//