import { Component, OnInit } from '@angular/core'
import { AuthService } from './Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.redirectToLoginIfNotLoggedIn();
  }

  isLoggedIn(): boolean {
    return this.authService.isAuthenticated();
  }

  redirectToLoginIfNotLoggedIn(): void {
    if (!this.authService.isAuthenticated() && this.router.url !== '/login') {
      this.router.navigate(['/login']);
    }
  }
}

