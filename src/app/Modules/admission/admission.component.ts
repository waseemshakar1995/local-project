import { Component, OnInit, ViewChild } from '@angular/core';
import {NgModule} from '@angular/core'
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.scss']
})
export class AdmissionComponent implements OnInit {
  userName: string = '';
  usersList:string [] = [];
  submitted = false;

user = {
  username: '',
  email: '',
  gender: '',
  password:''
}
  constructor() { }
  ngOnInit(): void {
    
   }
   @ViewChild('f') signUpForm!: NgForm


  onClick(){
     this.usersList.push(this.userName);
     
  }
  onFormSumbit(){
    this.submitted = true;
    
    this.user.username = this.signUpForm.value.username;
    this.user.email = this.signUpForm.value.email;
    this.user.gender = this.signUpForm.value.gender;
    this.user.password = this.signUpForm.value.password;
    this.signUpForm.reset();
    
  }
  userInput() {
        console.log(this.signUpForm);
        
  }
  fillValues() {
    this.signUpForm.form.patchValue({
        email: 'waseem@gmail.com',
        username: 'kashif',
      gender:'male',
      password: '12345'
    })
  }

 
}

