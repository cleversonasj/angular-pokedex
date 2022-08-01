import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules Routing
import { AppRoutingModule } from './routing.modules';

//Module
import { SharedModule } from '../shared/shared.module';

//Pages
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    HomeComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
