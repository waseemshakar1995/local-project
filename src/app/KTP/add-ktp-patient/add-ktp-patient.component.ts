import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { KtpFormComponent } from '../ktp-form/ktp-form.component';

@Component({
  selector: 'app-add-ktp-patient',
  templateUrl: './add-ktp-patient.component.html',
  styleUrls: ['./add-ktp-patient.component.scss']
})
export class AddKtpPatientComponent implements OnInit {

  userData!: MatTableDataSource<any>

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort

  ngOnInit(): void {}
  constructor() {}


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.userData.filter = filterValue.trim().toLowerCase();

    if (this.userData.paginator) {
      this.userData.paginator.firstPage()
    }
  }

}
