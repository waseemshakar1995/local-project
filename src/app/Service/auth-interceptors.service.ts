import {
  HttpEventType,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';

export class AuthInterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token =
      'eyJhbGciOiJIUzI1NiJ9.eyJqdGkiOiJsYUp3dElkIiwiaWF0IjoxNjkxMTMzNTI1LCJzdWIiOiIzMTM2MSIsImlzcyI6ImxhSnd0SXNzdWVyIiwiZW1wbnVtIjoiMV8xIiwiaXNhZG1pbiI6IlkiLCJzdWJjbyI6IjEiLCJmdWxsbmFtZSI6IlVzYW1hIEFsaSAiLCJ1c2VyTmFtZSI6InVhIiwidXNlcmlkIjoiMzEzNjEiLCJ1c2VyQ29kZSI6IjMxMzYxIiwidXNlcmVtYWlsIjoiaW5mby51c2FtYWFsaUBnbWFpbC5jb20iLCJleHAiOjE2OTExODc1MjV9.Mp5OdOsiYuh2y2zr0SfPPhNQtrQh33nl8kcjOKk0tXg';

    let modifiedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(modifiedRequest);
  }
}
