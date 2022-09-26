import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RequestInterceptor } from '../../interceptors/request-interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS,
    useClass: RequestInterceptor,
    multi: true
  }]
})
export class AuthModule { }