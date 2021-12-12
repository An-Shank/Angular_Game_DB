import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor{
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      req = req.clone({
        setHeaders: {
          'x-rapidapi-key': 'f2c825eb0amsh542c3f9c7f6304cp13870djsnfb879ce96160',
          'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
        },
        setParams: {
          key: 'c28378932f024419a4a5e0085fc873a2',
        }
      });
      return next.handle(req);
  }
}
