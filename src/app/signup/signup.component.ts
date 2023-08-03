import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  hide: any = true;
  isLoginMode = true;
  email!: string;
  password!: string;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {}


}
