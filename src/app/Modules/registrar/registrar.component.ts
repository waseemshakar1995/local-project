import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [UserService]
})
export class RegistrarComponent implements OnInit {
  users: { name: string; status: string }[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.users = this.userService.users;
  }

}
