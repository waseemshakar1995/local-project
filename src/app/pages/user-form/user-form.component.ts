import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserDataService } from 'src/app/Service/userdata.service';
import { Post } from 'src/app/Service/post.module';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  postForm!: FormGroup;
  posts!: Post[];
     
  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {

    this.postForm = new FormGroup({
      no: new FormControl(null, Validators.required),
      fName: new FormControl(null, Validators.required),
      lName: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
      address: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required)
   })
    this.post_student();
  }


// in this method we are getting data from firebase database using url
post_student() {
  const postData: Post = this.postForm.value;
  this.userDataService.student_create_posts(postData)
  .subscribe(response => {
    this.postForm.reset();  
  });
  }


}
