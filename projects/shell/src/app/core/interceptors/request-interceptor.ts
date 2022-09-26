import {
    HttpHandler, HttpHeaderResponse, HttpInterceptor, HttpProgressEvent, HttpRequest, HttpResponse, HttpSentEvent, HttpUserEvent
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TokenService } from '../auth/token/token.service';


@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpSentEvent
  | HttpHeaderResponse | HttpProgressEvent | HttpResponse<any> | HttpUserEvent<any>> {


    if (this.tokenService.hasToken()) {
      const token = this.tokenService.getToken();
      request = request.clone({
        setHeaders: {
          'Authorization': `Bearer ${token}`,
          'Accept-Language': '1'
        }
      });
    }

    return next.handle(request);
  }
}