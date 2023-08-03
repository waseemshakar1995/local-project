import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBarConfig,MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-ktp-form',
  templateUrl: './ktp-form.component.html',
  styleUrls: ['./ktp-form.component.scss']
})
export class KtpFormComponent implements OnInit {

  @ViewChild('f') form!:NgForm;
  disableSelect = new FormControl(false);
  mrNo!: string;
  firstName!: string;
  so!: string;
  age!: number;
  sex!: string;
  bloodgroup!:any;
  email!:any;
  phone!:string;
  profession!:string;
  education!:string;
  address!:string;
  socials!:string;
  donor!:string;

  constructor(private router:Router, private snackBar:MatSnackBar) { }

  ngOnInit(): void {
  }
  
  onFormSubmit() {
    console.log(this.form)
  }

  addKtp() {
    const ktpData = {
      mrNo: this.mrNo,
      firstName: this.firstName,
      so: this.so,
      age: this.age,
      sex: this.sex,
      bloodgroup: this.bloodgroup,
      email: this.email,
      phone: this.phone,
      profession: this.profession,
      education: this.education,
      address: this.address,
      socials: this.socials,
      donor: this.donor
    };

    let storedData:any = localStorage.getItem('ktpData');
    if (storedData) {
      storedData = JSON.parse(storedData);
      storedData.push(ktpData);
    } else {
      storedData = [ktpData];
    }

    localStorage.setItem('ktpData', JSON.stringify(storedData));
    this.successMessage();
    setTimeout(() => {
     
      this.router.navigate(['/patient-visits-ktp']);
      this.clearForm();
    }, 3000);
    
  }

  clearForm() {
    this.mrNo = '';
    this.firstName = '';
    this.so = '';
    this.age = NaN;
    this.sex = ' ';
    this.bloodgroup = '';
    this.email = '';
    this.phone = '';
    this.profession = '';
    this.education = '';
    this.address = '';
    this.socials = '';
    this.donor = '';
  }
  successMessage(): void {
    this.snackBar.open("Recepient saved successfully", "", {
      duration: 2000,
      panelClass: ['green-snackbar'],
     });
     console.log('snackbar')
  }
}
