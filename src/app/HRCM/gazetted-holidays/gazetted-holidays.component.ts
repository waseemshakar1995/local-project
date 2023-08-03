import { Component, OnInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { UserDataService } from 'src/app/Service/userdata.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

@Component({
  selector: 'app-gazetted-holidays',
  templateUrl: './gazetted-holidays.component.html',
  styleUrls: ['./gazetted-holidays.component.scss']
})
export class GazettedHolidaysComponent implements OnInit {

  displayedColumns: string[] = ['select','title','description', 'fromdate', 'todate','status','repeat','action'];
  posts: any= [];
  userData!: MatTableDataSource<any>
@ViewChild(MatPaginator) paginator!: MatPaginator;
@ViewChild(MatSort) sort!: MatSort
selection = new SelectionModel<any>(true, []);
  constructor(private http: HttpClient, private userDataService: UserDataService) { }

  ngOnInit(): void {
    const gazettedData =  this.userDataService.gazettedHolidays()
 .pipe(map( (response:any)=> {
  return response.data
 }))


 .subscribe( response => {
  console.log(response);
  this.posts = response.map(( element:any) => {
    return {
      ...element,
      status: element.status === 'Y',
      repeat: element.repeat ==='Y'
    }
  });
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
  isAllSelected() {
    return this.userData
  }
  // this function is about master selection on one click
  masterToggle() {
    this.isAllSelected () ?
     this.selection.clear() : this.selection.select();
  }

}
