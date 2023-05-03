import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormArray } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model';
import { Router } from '@angular/router';




@Component({
  selector: 'app-addproductform',
  templateUrl: './addproductform.component.html',
  styleUrls: ['./addproductform.component.css']
})
export class AddproductformComponent implements OnInit{


  contentForm= this.fb.group({
    id:[0],
    name:["", Validators.required],
    price:[0, Validators.required],
    description:[""],
    imageUrl: '../assets/images/product-1',
    tags: this.fb.array([this.fb.control("")]),
    categories: this.fb.array([this.fb.control("")]),
    features: this.fb.array([this.fb.control("")]),
    steps: this.fb.array([this.fb.control("")])
  })



  constructor(private productService: ProductService, private fb:FormBuilder,private router: Router){}
  
  ngOnInit(): void {
      
  }

  assignId(){
    const products = this.productService.products;
    const highestId = products.length ? Math.max(...products.map(p => p.id)) : 0;
    return highestId + 1;
  }

  clear(){
    this.contentForm.reset();
  }

  getTags(){
    return this.contentForm.get("tags") as FormArray;
  }
  
  addTag() {
    this.getTags().push(this.fb.control(""));
  }
  getCategories(){
    return this.contentForm.get("categories") as FormArray;
  }

  addCategory() {
    this.getCategories().push(this.fb.control(""));
  }
  getFeatures(){
    return this.contentForm.get("features") as FormArray;
  }

  addFeature() {
    this.getFeatures().push(this.fb.control(""));
  }

  getSteps(){
    return this.contentForm.get("steps") as FormArray;
  }

  addStep() {
    this.getSteps().push(this.fb.control(""));
  }

  goBack() {
    this.router.navigate(['/']);
  }
  onSubmit(){
    const newProductId = this.assignId();
    this.contentForm.patchValue({
      id: newProductId,
    })
    const newProduct = this.contentForm.value as Product;
    this.productService.products = this.productService.products.concat(newProduct);
    
    console.log(this.productService.products);
    this.router.navigate(['/']);
}

}

