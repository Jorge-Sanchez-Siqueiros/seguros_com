import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home.page';
import { HomeComponent } from './components/home/home.component';
import { MainComponent } from './components/main/main.component';



@NgModule({
  declarations: [
    HomePage,
    HomeComponent,
    MainComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
