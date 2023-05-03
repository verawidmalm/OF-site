import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductgridComponent } from './productgrid/productgrid.component';
import { FooterComponent } from './footer/footer.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddproductformComponent } from './addproductform/addproductform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDropModule } from 'ngx-file-drop';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductgridComponent,
    FooterComponent,
    ProductdetailsComponent,
    AddproductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDropModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
