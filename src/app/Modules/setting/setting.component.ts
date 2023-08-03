import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserDataService } from 'src/app/Service/userdata.service';
import { Post } from 'src/app/Service/post.module';




@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
 
  university: any = [];
  dataSource:any = this.university;
  displayedColumns = ['country','alpha_two_code', 'name']

  constructor( private http:HttpClient, private userDataService: UserDataService) {

          this.http.get('https://dummy.restapiexample.com/api/v1/employees')
         .subscribe(response => {
            console.log(response)
            
          })
    
   }


  ngOnInit(): void {

    let page =this.userDataService.univerity_data().subscribe( response => {
      console.log(response);
     this.university = response;
      
     })
  }

}
