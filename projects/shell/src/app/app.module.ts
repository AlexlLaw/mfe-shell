import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NoLayoutAuthComponent } from './core/components/no-layout-auth/page/no-layout-auth.component';
import { ErrorHandlerInterceptor } from './core/interceptors/error-handler.interceptor';
import { layoutAuthModule } from './core/components/layout-auth/page/layout-auth.module';

@NgModule({
  declarations: [
    AppComponent,
    NoLayoutAuthComponent,
  ],
  imports: [
    AppRoutingModule,
    layoutAuthModule
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
