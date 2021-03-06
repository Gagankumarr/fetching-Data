import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PhotosService } from 'src/services/photos.service';
import {HttpClientModule}  from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
 

  ],
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
