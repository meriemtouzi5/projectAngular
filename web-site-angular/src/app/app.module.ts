import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AfficheDataComponent } from './affiche-data/affiche-data.component';
import { FormComponent } from './form/form.component';
import { RouterModule,Routes, RoutesRecognized } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
const routes:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'contact',
    component:FormComponent
  },
  {
    path:'list',
    component:AfficheDataComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AfficheDataComponent,
    FormComponent,
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
