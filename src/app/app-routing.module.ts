import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { AddproductformComponent } from './addproductform/addproductform.component';

const routes: Routes = [
  {path: '', component: ProductgridComponent},
  {path: 'product/:id', component: ProductdetailsComponent},
  { path: 'add-product', component: AddproductformComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
