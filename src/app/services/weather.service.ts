import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from '../models/weather.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}
      
    getweatherdata(cityname : string):Observable<WeatherData>
    {   
         return this.http.get<WeatherData>("https://weather-api99.p.rapidapi.com/weather",
          {
            headers: new HttpHeaders()
            .set("X-RapidAPI-Host","weather-api99.p.rapidapi.com")
            .set("X-RapidAPI-Key","1b265ee8dbmsh3992b28957113d3p16b09bjsna7f36b3b11eb"),
            params:new HttpParams()
            .set('city',cityname)
          })
    }
   }

