import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide: boolean = true;
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}
  ngOnInit(): void {
    // Check if the user is already authenticated
    if (this.authService.isAuthenticated()) {
      // Redirect to the home page
      this.router.navigate(['/home']);
    }
  }

  login(authForm: NgForm) {
    this.authService.login(this.username, this.password);
  }
}
