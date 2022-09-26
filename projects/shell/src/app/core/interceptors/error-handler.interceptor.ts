import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor() {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {},
                (error: HttpErrorResponse) => {
                        if (error || ([302, 304].includes(error))) {
                        }
                        if (error || ([400, 401, 404, 500].includes(error))) {
                           console.log('erro 400, 401, 404, 500');
                        }
                        console.log('caiu no interceptor');
                }
            )
        );
    }
}