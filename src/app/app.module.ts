import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CarService} from './services/car.service';
import { CarsComponent } from './components/cars/cars.component';
import {BicycleService} from './services/bicycle.service';
import {MotorcycleService} from './services/motorcycle.service';
import {TractorService} from './services/tractor.service';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
