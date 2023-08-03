import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map } from 'rxjs';
import { UserDataService } from 'src/app/Service/userdata.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss']
})
export class DepartmentsComponent implements OnInit {
  displayedColumns: string[] = ['code','description'];
  posts: any;
  userData!: MatTableDataSource<unknown>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  ngOnInit(): void {
    const depList =  this.userDataService.deptList()
    .pipe(map( (response:any)=> {
     return response.data
    }))
   
   
    .subscribe( response => {
     console.log(response);
     this.posts = response

     this.userData = new MatTableDataSource(this.posts)
      this.userData.paginator = this.paginator;
      this.userData.sort = this.sort;
     })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userData.filter = filterValue.trim().toLowerCase();
  
    if (this.userData.paginator) {
      this.userData.paginator.firstPage()
    }
  }
  // this function is about selectin of rows 


}
