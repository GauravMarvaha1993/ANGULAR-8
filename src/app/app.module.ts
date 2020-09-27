import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  
import { AppComponent } from './app.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductGetComponent } from './product-get/product-get.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { MovieAppComponent } from './movie-app/movie-app.component';
import {FormsModule} from '@angular/forms';    
import { ReactiveFormsModule } from '@angular/forms';  
import { RouterModule} from '@angular/router';
import { ChangeTextDirective } from './change-text.directive';
import { SqrtPipe } from '../custom_pipes/app.sqrt';
import { MyserviceService } from './myservice.service';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductAddComponent,
    ProductGetComponent,
    ProductEditComponent,
    MovieAppComponent,
    ChangeTextDirective,
    SqrtPipe, // custom pipe class
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,

    RouterModule.forRoot([
      {
         path: 'product-add',
         component: ProductAddComponent
      },

      {
        path: 'get-product',
        component: ProductGetComponent
      },

      {
        path: 'edit-product',
        component: ProductEditComponent
      }

   ])
  ],
  providers: [
    MyserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
