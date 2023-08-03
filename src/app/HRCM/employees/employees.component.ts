import { Component, OnInit,ViewChild } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserDataService } from 'src/app/Service/userdata.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  userData!: MatTableDataSource<any>
  posts: any;
  satusValue: any;
  isAdmin: boolean = false;
  displayedColumns: any = ['picture', 'machineid', 'fullname', 'deptname', 'designame', 'shiftname', 'toggle', 'action']
  allColumns: string[] = [];
  selection = new SelectionModel<any>(true, []);

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  constructor( private userDataService: UserDataService, private http:HttpClient) { }

  ngOnInit(): void {

    const networkData = this.userDataService.getNetworkTable()

    .pipe(map((response: any) => {
      return response.data
    }))

    .subscribe(response => {
      console.log(response)
      this.posts = response.map((element: any) => {
        return {
          ...element,
          status: element.status === 'Y'
        }
      });

      this.userData = new MatTableDataSource(this.posts)


      this.userData.paginator = this.paginator;
      this.userData.sort = this.sort;


    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userData.filter = filterValue.trim().toLowerCase();

    if (this.userData.paginator) {
      this.userData.paginator.firstPage()
    }
  }
}
