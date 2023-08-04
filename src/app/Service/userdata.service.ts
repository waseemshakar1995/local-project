import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { Post } from './post.module';


export interface todo {
  
  userId: string;
  id: number;
  title: string;
  completed: string;
}



@Injectable({
  providedIn: 'root'
})

export class UserDataService {
  
  apiUrl = 'https://jsonplaceholder.typicode.com/todos';
  projectList: any = [];
  
  constructor(private http: HttpClient) { }
  
  GetTodos(): Observable<todo[]> {
    return this.http.get<todo[]>(this.apiUrl);
  }
  
  //    this is about observable fetching data---------------- two parameters
  
  fetchPosts() {
    
    return this.http.get<{ [key: string]: Post }>('https://first-angular-project-4cdf4-default-rtdb.firebaseio.com/posts.json')
    .pipe(map((response) => {
      let posts: Post[] = [];
      for (let key in response) {
        posts.push({ ...response[key], key });
      }
      
      return posts;
    }))
  }
  
  
  
  // in this method we are getting data from firebase database using url
  createPosts(postData: Post) {
    return this.http.post<{ name: string }>
    ('https://first-angular-project-4cdf4-default-rtdb.firebaseio.com/posts.json', postData)
  }
  
  //get and post method with student record
  
  student_get_posts() {
    
    return this.http.get<{ [key: string]: Post }>('https://first-angular-project-4cdf4-default-rtdb.firebaseio.com/student.json')
    .pipe(map((response: any) => {
      let posts: Post[] = [];
      for (let key in response) {
        posts.push({ ...response[key], key });
      }
      
      // this.posts = posts
      return posts;
      
    }));
  }
  
  
  
  // in this method we are getting data from firebase database using url
  student_create_posts(postData: Post) {
    return this.http.post<{ name: string }>
    ('https://first-angular-project-4cdf4-default-rtdb.firebaseio.com/student.json', postData)
    
  }
  
  
  // in this method we will get network data table using simple code
  
  getNetworkTable() {
    return this.http.get('http://172.16.10.235:8091/hcms/employees',
    {
      
    })
  }
  
  univerity_data() {
    
    return this.http.get<{ [key: string]: Post }>('http://universities.hipolabs.com/search?country=United+Kingdom')
    .pipe(map((response: any) => {
      let posts: Post[] = [];
      for (let key in response) {
        posts.push({ ...response[key], key });
      }
      
      // this.posts = posts
      return posts;
      
    }));
  }
  
  // this is about gazetted holidays
  
  
  
  gazettedHolidays() {
    return this.http.get('http://172.16.10.235:8091/hcms//gazetteddays',
    {
      
    })
  }
  

  deptList() {
    return this.http.get('http://172.16.10.235:8091/hcms/lovDepartments',)
  }
  
  
  getLtpPatients(data: any) {
    return this.http.post<any[]>('http://172.16.10.235:8091/opd/ktpExpPatients',data)
  }
  
  getsingleLtpPatients(data:any) {
    return this.http.post<any>('http://172.16.10.235:8091/opd/ktpPatVisitRecord',data);
  }
}