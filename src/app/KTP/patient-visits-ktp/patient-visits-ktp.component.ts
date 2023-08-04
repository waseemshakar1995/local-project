import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { DatePipe } from '@angular/common'; // Import DatePipe
import { UserDataService } from 'src/app/Service/userdata.service';

@Component({
  selector: 'app-patient-visits-ktp',
  templateUrl: './patient-visits-ktp.component.html',
  styleUrls: ['./patient-visits-ktp.component.scss']
})
export class PatientVisitsKtpComponent implements OnInit {

  dataList: any[] = [];
  data: any[] = [];
  regnum: string = '';
  visitnum: string = '';

  constructor(private router: Router, public userDataService: UserDataService, private datePipe: DatePipe) {} // Inject DatePipe

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    const requestData = {
      "fromdate": "2023-07-06T05:00:00.000Z",
      "todate": "2023-07-07T04:59:53.071Z",
      "regnum":"",
    };

    this.userDataService.getLtpPatients(requestData)
      .pipe(map((response: any) => {
        return response.data;
      }))
      .subscribe(response => {
        this.data = response
        this.data = response.map((item: any) => ({
          ...item,
          visitdate: this.formatDate(item.visitdate) // Format the date using formatDate method
        }));
      });
  }

  formatDate(date: string): string {
    const formattedDate = this.datePipe.transform(date, 'M/d/yyyy, h:mm:ss a');
    return formattedDate || '';
  }

  onClick(data: any): void {
    const queryParams = { visitnum: data.visitnum };
    this.router.navigate(['patient-visits-ktp/ktp-detail'], { queryParams });
  }

  applyFilter() {
    if (this.regnum.trim() !== '' || this.visitnum.trim() !== '') {
      const regnumFilter = this.regnum.trim().toLowerCase();
      const visitnumFilter = this.visitnum.trim().toLowerCase(); 
      this.data = this.data.filter(item => {
        const regnumMatch = item.regnum.toLowerCase().includes(regnumFilter);
        const visitnumMatch = item.visitnum.toLowerCase().includes(visitnumFilter);
        return regnumMatch && visitnumMatch;
      });
    } else {
      this.getData();
    }
  }

}
