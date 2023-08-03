import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-fee-management',
  templateUrl: './fee-management.component.html',
  styleUrls: ['./fee-management.component.scss']
})
export class FeeManagementComponent implements OnInit {
 isavailable:boolean = true;
 status:string = 'kashif';
 value = 1;
 about:string = '';
 restrictedNames = ['waseem', 'nadeem']


 genders = ['male', 'female']
 signUpForm!: FormGroup;
  constructor() {
    console.log();
    
   }
   get hobbyControls() {
    return (<FormArray>this.signUpForm.get('hobbies')).controls;
   }

  ngOnInit(): void {
    console.log();
    this.signUpForm = new FormGroup({
      'username': new FormControl(null,[Validators.required, this.isRestrictedNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'gender': new FormControl('female'),
      'hobbies': new FormArray([]),
    })
    
  }
  onSubmit(){
     console.log(this.signUpForm);
     
  }
  isRestrictedNames (control: FormControl) : { [ s : string] : boolean} {
      if (this.restrictedNames.includes(control.value)) {
        return { nameIsRestricted: true};
      }
      return null!;
  }
  onAddHobby() {
    console.log('clicked');
    const control = new FormControl(null, [Validators.required]);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
    
  }

}
