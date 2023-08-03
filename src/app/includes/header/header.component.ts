import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
   Email = "waseemshakar1995@gmail.com"

   logout() {
    this.authService.logout()
    this.router.navigate(['/']);
   }
}

