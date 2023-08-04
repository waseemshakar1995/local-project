
import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJsYUp3dElkIiwiaWF0IjoxNjkxMTMzMTU4LCJzdWIiOiIzMTM2MSIsImlzcyI6ImxhSnd0SXNzdWVyIiwiZW1wbnVtIjoiMV8xIiwiaXNhZG1pbiI6IlkiLCJzdWJjbyI6IjEiLCJmdWxsbmFtZSI6IlVzYW1hIEFsaSAiLCJ1c2VyTmFtZSI6InVhIiwidXNlcmlkIjoiMzEzNjEiLCJ1c2VyQ29kZSI6IjMxMzYxIiwidXNlcmVtYWlsIjoiaW5mby51c2FtYWFsaUBnbWFpbC5jb20iLCJleHAiOjE2OTExODcxNTh9.BxV_3aOdDjt5U6xWpS3CBfwNgOLrf-KRsitMypV2wm0'

        let modifiedRequest = req.clone({

            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        })

        return next.handle(modifiedRequest);
}
}