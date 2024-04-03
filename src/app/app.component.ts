import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CommonModule } from "@angular/common";
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  constructor(private weatherService: WeatherService)
  {

  }
  cityName?:string='Wellington';
  weatherdata?:WeatherData;
  ngOnInit(): void {
     this.weatherService.getweatherdata('pune')
     .subscribe({
      next:(response)=>{
                this.weatherdata=response;
        console.log(response);

      }
     });
  }
  title = 'weather-app';
   onSubmit(){
         this.getweatherdata('pune');
         this.cityName='';
   }
   private getweatherdata(cityName:string)
   {
    this.weatherService.getweatherdata(cityName)
     .subscribe({
      next:(response)=>{
                this.weatherdata=response;
        console.log(response);

      }
     })
}
}
