import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-authorization-page',
  templateUrl: './authorization-page.component.html',
  styleUrls: ['./authorization-page.component.scss']
})
export class AuthorizationPageComponent implements OnInit {

  constructor(public http:HttpClient) { }

  ngOnInit(): void {}
  
}
