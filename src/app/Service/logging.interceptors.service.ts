import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, tap } from "rxjs";

export class LoggingInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(tap((event) => {
            // console.log(event);
            // console.log(req.headers);
            
            if(event.type === HttpEventType.Response){
            //  console.log(event.body);
             
            }
            
         })
     );
    }

}