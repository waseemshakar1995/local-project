import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-hostel',
  templateUrl: './hostel.component.html',
  styleUrls: ['./hostel.component.scss']
})
export class HostelComponent implements OnInit {
   userName: string = '';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onAddUser(){
    this.userService.addUser(this.userName, 'Active');
  }

}
