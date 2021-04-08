import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  public darkMode:boolean=false;
  constructor() { }

  ngOnInit(): void {
  }
  changeMode(){
    let body=document.getElementById('mode');
    this.darkMode=!this.darkMode;
    if(this.darkMode===false){
      body.classList.add('light');
      body.classList.remove('dark');
    }
    else{
      body.classList.remove('light');
      body.classList.add('dark');
    }
  }

}
