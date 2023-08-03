import { Component, OnInit, Input } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  @Input()
  user!: { name: string; status: string; };
  @Input()
  id!: number;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  Inactive( status: string){
     this.userService.updateStatus(this.id, status)
     
  }
  onActive(status: string){
   this.userService.updateStatus(this.id, status)
  }

}
