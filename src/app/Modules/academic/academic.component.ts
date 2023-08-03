import {Component, OnInit, AfterViewInit, ViewChild, Injectable} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { UserDataService } from 'src/app/Service/userdata.service';
import { Observable} from 'rxjs'
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable()

 @Component({
  selector: 'app-academic',
  templateUrl: './academic.component.html',
  styleUrls: ['./academic.component.scss']
})
export class AcademicComponent implements AfterViewInit, OnInit{
           
  
           data!: MatTableDataSource<any>;
           displayedColumns = [ 'id', 'userId','title','completed','toggle']
           showImage!: boolean;
           myControl =  new FormControl('');
           filteredOptions!: Observable<any[]>;
           @ViewChild(MatPaginator) paginator!: MatPaginator;
           @ViewChild(MatSort) sort!: MatSort;
           posts: any = [];
           listone:any = [];
           options: any = [];
           searchTerm: any = [];
           
           
           

           constructor( private userdataservice: UserDataService, public http: HttpClient){}

  ngOnInit(): void {
    this.showImage = false;  
    this.userdataservice.GetTodos().subscribe((response:any) => {
     
      this.posts = response.map((element: any) => {
        return {
          ...element,
          status: element.completed === true
        }
      });
     this.data = new MatTableDataSource(this.posts)

     this.data.paginator = this.paginator;
     this.data.sort = this.sort;
     });
  }
  
   ngAfterViewInit(): void {}

          applyFilter(event: Event) {
            const filterValue = (event.target as HTMLInputElement).value;
            this.data.filter = filterValue.trim().toLowerCase();

            if(this.data.paginator){
              this.data.paginator.firstPage()
            }

          }

          }
   






