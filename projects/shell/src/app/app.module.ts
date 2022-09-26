import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './core/components/layout-auth/components/body/body.component';
import { NavbarAuthComponent } from './core/components/layout-auth/components/navbar-auth/navbar-auth.component';
import { SidebarAuthComponent } from './core/components/layout-auth/components/sidebar-auth/sidebar-auth.component';
import { LayoutAuthComponent } from './core/components/layout-auth/page/layout-auth.component';
import { NoLayoutAuthComponent } from './core/components/no-layout-auth/page/no-layout-auth.component';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';



@NgModule({
  declarations: [
    AppComponent,
    NavbarAuthComponent,
    SidebarAuthComponent,
    BodyComponent,
    LayoutAuthComponent,
    NoLayoutAuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ], 
  bootstrap: [AppComponent],
  providers: [ {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorHandlerInterceptor,
    multi: true
  }],
})

export class AppModule {}
