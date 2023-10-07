import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutAuthComponent } from './layout-auth.component';
import { BodyComponent } from '../components/body/body.component';
import { NavbarCategoriesComponent } from '../components/navbars/navbar-categories/navbar-categories.component';
import { NavbarSubcategoriesComponent } from '../components/navbars/navbar-subcategories/navbar-subcategories.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarCategoriesComponent,
    BodyComponent,
    NavbarSubcategoriesComponent,
    LayoutAuthComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule
  ],
  exports: [
    LayoutAuthComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})

export class layoutAuthModule {}
