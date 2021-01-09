import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-affiche-data',
  templateUrl: './affiche-data.component.html',
  styleUrls: ['./affiche-data.component.css']
})
export class AfficheDataComponent implements OnInit {
  posts: any;
  constructor(private http:HttpClient) { 
    
  }

  ngOnInit(): void {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(response =>
    {
      this.posts=response;
    })
    
  }

}
