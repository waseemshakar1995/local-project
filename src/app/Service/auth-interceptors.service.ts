
import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJsYUp3dElkIiwiaWF0IjoxNjkxMDQ2MTU2LCJzdWIiOiIzMTM2MSIsImlzcyI6ImxhSnd0SXNzdWVyIiwiZW1wbnVtIjoiMV8xIiwiaXNhZG1pbiI6IlkiLCJzdWJjbyI6IjEiLCJmdWxsbmFtZSI6IlVzYW1hIEFsaSAiLCJ1c2VyTmFtZSI6InVhIiwidXNlcmlkIjoiMzEzNjEiLCJ1c2VyQ29kZSI6IjMxMzYxIiwidXNlcmVtYWlsIjoiaW5mby51c2FtYWFsaUBnbWFpbC5jb20iLCJleHAiOjE2OTExMDAxNTZ9.9_GOdSbmeVBIHnyp-PKuG2pknEpwMj6Gio8Ead7OjTM'

        let modifiedRequest = req.clone({

            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })

        return next.handle(modifiedRequest);
}
}