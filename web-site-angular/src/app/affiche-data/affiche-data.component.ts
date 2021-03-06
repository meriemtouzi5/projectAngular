import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-affiche-data',
  templateUrl: './affiche-data.component.html',
  styleUrls: ['./affiche-data.component.css']
})
export class AfficheDataComponent implements OnInit {
  posts: any;
  errorin:any;
  constructor(private postService:PostService) { 
    
  }

  ngOnInit(): void {
   this.getPosts();
    
  }
  getPosts(){
  this.postService.getPosts().subscribe(response =>
  {
    this.posts=response;
  },error=>{
    this.errorin="Error unittendue";
  })}

}
