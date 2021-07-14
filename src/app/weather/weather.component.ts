import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  cityName: string;
  data: any;
  data2: any;

  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  getWeatherData() {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + this.cityName + '&appid=c0ae86fc5e4687d03502462658f38087&lang=fr&units=metric')
      .subscribe((reponse) => {
        this.data = reponse;
        console.log(reponse);
      }, (error) => {
        console.log(error);
      });
  }

  getSecondWeatherData() {
    this.http.get('http://api.weatherapi.com/v1/current.json?key=312897477a984b2b92e174136211307&q='+this.cityName+'&aqi=no')
      .subscribe((response) => {
        this.data2 = response;
      }, (error) => {
        console.log(error);

      })
  }



}
