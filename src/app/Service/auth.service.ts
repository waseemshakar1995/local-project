import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

interface AuthResponseData {
  token: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isLoggedIn: boolean = false;

  constructor(private http: HttpClient, private router:Router) {
    this.checkToken();
  }

  login(username: string, password: string) {
    // Make your API request to authenticate the user
    // and retrieve the token
    return this.http.post<AuthResponseData>('https://dummyjson.com/auth/login', {
      username: username,
      password: password
    }).subscribe(
      response => {
        console.log(response);
        
        const token = response.token;
        this.isLoggedIn = true;
        localStorage.setItem('token', token);
        
        // Redirect to the home page after successful login
        this.router.navigate(['/home']);
      },
      error => {
        // Handle error if authentication fails
        console.error('Authentication failed', error);
        this.isLoggedIn = false;
      }
    );
  }
  logout() {
    // Clear the token from local storage or cookie if needed
    localStorage.removeItem('token');
    // Set the isLoggedIn flag to false
    this.isLoggedIn = false;
  }

  isAuthenticated() {
    // Check if the user is authenticated based on the isLoggedIn flag
    return this.isLoggedIn;
  }

  private checkToken() {
    const token = localStorage.getItem('token');
    if (token) {
      this.isLoggedIn = true;
    }
  }
}
