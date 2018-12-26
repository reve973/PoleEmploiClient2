import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';


@Injectable()
export class JwtInterceptorService implements HttpInterceptor {
  private ErrorObservable: any;

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercept');
    alert('intercept jwt');

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const currentToken = JSON.parse(localStorage.getItem('currentToken'));
    if (currentUser && currentToken) {
      request = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + currentToken)});
    }

    return next.handle(request);
    }
  }

